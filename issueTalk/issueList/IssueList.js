import React from 'react'
import {
    View,
    Button,
    FlatList,
    StyleSheet,
    Platform
} from 'react-native';
import IssueListItem from './IssueListItem';
import issueTalkStore from '../issueTalkStore/IssueTalkStore';
import * as myAction from '../issueTalkAction/IssueTalkAction';
class IssueList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data : issueTalkStore.getData()
        };
    }

    componentWillMount() {
        issueTalkStore.on("change" ,() => {
           this.setState({
               data : issueTalkStore.getData()
           })
        });
    }

    fetchData = (number) => {
        myAction.fetchData();
    };

    sayHi = (name) => {
        myAction.sayHi(name);
    };

    sayHiAndCallback = (name) => {
        var fn = {};
        fn.success = success => alert(success);
        fn.error =  error => alert(error);
        myAction.sayHiAndCallback(name, fn);
    };

    render() {
        if(this.state.data.length > 0) {
            return (
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <IssueListItem rowData={item}/>}
                />
            );
        }else {
            return (
                <View style={styles.container}>
                    <Button style={styles.btn} onPress={this.fetchData.bind(this, 100)} title={'Get Data!'} />
                    <Button style={styles.btn} onPress={this.sayHi.bind(this, "yur")} title={'Say Hi'} />
                    <Button style={styles.btn} onPress={this.sayHiAndCallback.bind(this, "YUR")} title={'Say Hi And Callback'} />
                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        // margin: 50
    }
});

export default IssueList