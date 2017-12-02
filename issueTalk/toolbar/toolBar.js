import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Back from './back'
import SearchingFiled from './searchingFiled/searchingFiled'
const ToolBar = () => (
    <View style={style.container}>
        <Back />
        <SearchingFiled />
    </View>
);

const style = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 20,
        borderTopWidth: 3,
        borderTopColor: '#747474',
        borderBottomColor: '#747474',
        borderBottomWidth: 3,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20
    }
});

export default ToolBar;