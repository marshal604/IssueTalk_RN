import {EventEmitter} from 'events';
import * as myFirebase from '../../firebase/myFirebase';


class IssueTalkStore extends EventEmitter{
    constructor() {
        super();
        this.data = [];
    }

    getData = () => this.data;

    useFetch = () => {
        fetch(myFirebase.url(),{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (res) => res.json()
        ).then((data) => {
            const dataList = [];
            data.map((item ,i)=> {
                dataList.push({
                    key: i,
                    name: item.name
                });
            });
            this.data = dataList;
            this.emit('change');
        });

    };

    createData = () => {
        const myData = [];
        for (let i=0; i < 100; i++) {
            myData.push({
                name: 'test' + i
            });
        }
        fetch(myFirebase.url(),{
            method: 'PUT',
            body: JSON.stringify(myData)
        });
    };


}

const issueTalkStore = new IssueTalkStore();

export default issueTalkStore;