/*
*議題討論版框架Component
*/

import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native';
import ToolBar from './toolbar/toolBar'
import IssueList from './issueList/IssueList'
const IssueTalk = () => (
    <View style={styles.container}>
        <ToolBar />
        <IssueList />
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default IssueTalk