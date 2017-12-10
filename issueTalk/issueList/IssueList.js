import React from 'react'
import {
    View,
    Button,
    FlatList,
    StyleSheet
} from 'react-native';
import IssueListItem from './IssueListItem';
import issueTalkStore from '../issueTalkStore/IssueTalkStore';
class IssueList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data : issueTalkStore.getData()
        };
        // this.createData();
    }

    componentWillMount() {
        issueTalkStore.on("change" ,() => {
           this.setState({
               data : issueTalkStore.getData()
           })
        });
    }

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
                    <Button style={styles.btn} onPress={issueTalkStore.useFetch} title={'Get Data!'} />
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