import {EventEmitter} from 'events';
import * as myFirebase from '../../firebase/myFirebase';
import dispatcher from '../Dispatcher';
import * as myAction from '../issueTalkAction/IssueTalkAction';
import {
    NativeModules,
    Platform
} from 'react-native';

class IssueTalkStore extends EventEmitter {
    constructor() {
        super();
        this.data = [];
        this.helloPlugin = NativeModules.TestBridge;
    }

    getData = () => this.data;

    fetchData = () => {
        fetch(myFirebase.url(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (res) => res.json()
        ).then((data) => {
            const dataList = [];
            data.map((item, i) => {
                dataList.push({
                    key: i,
                    name: item.name
                });
            });
            this.data = dataList;
            this.emit('change');
        });

    };

    createData = (number) => {
        const myData = [];
        for (let i = 0; i < number; i++) {
            myData.push({
                name: 'test' + i
            });
        }
        fetch(myFirebase.url(), {
            method: 'PUT',
            body: JSON.stringify(myData)
        });
    };

    sayHi = (name) => {
        this.helloPlugin.sayHi(name);
    };

    sayHiAndCallback = (name, fn) => {
        this.helloPlugin.sayHiAndCallback(name, fn.success, fn.error);
    };

    sayHiAndPromise = async (name, fn) => {
        try{
            const event = await this.helloPlugin.sayHiAndPromise(name);
            fn.success.call(this, event);
        }catch (e) {
            console.error(e);
        }

    };

    handlerAction = (type) => {
        switch(type.type) {
            case myAction.CREATE_DATA:
                this.createData(type.number);
                break;
            case myAction.FETCH_DATA:
                this.fetchData();
                break;
            case myAction.SAY_HI:
                this.sayHi(type.text);
                break;
            case myAction.SAY_HI_AND_CALLBACK:
                this.sayHiAndCallback(type.text, type.fn);
                break;
            case myAction.SAY_HI_AND_PROMISE:
                this.sayHiAndPromise(type.text, type.fn);
                break;
        }
    }
}


const issueTalkStore = new IssueTalkStore();

export default issueTalkStore;

dispatcher.register(issueTalkStore.handlerAction.bind(issueTalkStore));
