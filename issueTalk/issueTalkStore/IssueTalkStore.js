import {EventEmitter} from 'events';
import * as myFirebase from '../../firebase/myFirebase';
import dispatcher from '../Dispatcher';
import * as myAction from '../issueTalkAction/IssueTalkAction';

class IssueTalkStore extends EventEmitter {
    constructor() {
        super();
        this.data = [];
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

    handlerAction = (type) => {
        switch(type.type) {
            case myAction.CREATE_DATA:
                this.createData(type.number);
                break;
            case myAction.FETCH_DATA:
                this.fetchData();
                break;
        }
    }
}


const issueTalkStore = new IssueTalkStore();

export default issueTalkStore;

dispatcher.register(issueTalkStore.handlerAction.bind(issueTalkStore));
