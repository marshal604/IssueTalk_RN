import React from 'react'
import {
    View,
    Button,
    FlatList,
    StyleSheet
} from 'react-native';
import IssueListItem from './IssueListItem';
import issueTalkStore from '../issueTalkStore/IssueTalkStore';
import dispatcher from '../Dispatcher';
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
    }
});

export default IssueList