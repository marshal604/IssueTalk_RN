/*
*議題討論版框架Component
*/

import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native';
import ToolBar from './toolbar/toolBar'
const IssueTalk = () => (
    <View>
        <ToolBar />
    </View>
);

const style = StyleSheet.create({
    container:{
        color: 'pink'
    }
});


export default IssueTalk