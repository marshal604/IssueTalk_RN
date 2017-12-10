/*
*議題討論版框架Component
*/

import React, {Component}from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import ToolBar from './toolbar/toolBar'
import IssueList from './issueList/IssueList'
import * as myFirebase from '../firebase/myFirebase';



class IssueTalk extends Component{
    constructor(){
        super();
        myFirebase.initMyFirebase();
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar />
                <IssueList />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default IssueTalk