import React from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import IssueListItem from './IssueListItem';

class IssueList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    key: 'test1'
                },
                {
                    key: 'test2'
                },
                {
                    key: 'test3'
                },
                {
                    key: 'test4'
                },
                {
                    key: 'test5'
                },
                {
                    key: 'test6'
                },
                {
                    key: 'test7'
                },
                {
                    key: 'test8'
                },
                {
                    key: 'test9'
                },
                {
                    key: 'test10'
                },
                {
                    key: 'test11'
                },
                {
                    key: 'test12'
                },
                {
                    key: 'test13'
                },
                {
                    key: 'test14'
                },
                {
                    key: 'test15'
                },
                {
                    key: 'test16'
                },
                {
                    key: 'test17'
                },
                {
                    key: 'test18'
                },
                {
                    key: 'test19'
                },
                {
                    key: 'test20'
                },
                {
                    key: 'test21'
                },
                {
                    key: 'test22'
                },
                {
                    key: 'test23'
                },
                {
                    key: 'test24'
                }
            ]
        };
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                renderItem={({item}) => <IssueListItem rowData={item}/>}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
    }
});

export default IssueList