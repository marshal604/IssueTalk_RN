import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Platform
} from 'react-native';
import Magnifer from './magnifer'

const platform = Platform.select({
    ios: {
        textInput: {
        }
    },
    android: {
        textInput: {
            underlineColorAndroid: 'transparent'
        }
    }
});

class SearchingFiled extends Component {
    constructor() {
        super();
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={'搜尋'}
                />
                <Magnifer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flex: 1,
        height: '100%',
        padding: 5,
        justifyContent: 'center'
    },
    textInput: {
        height: '100%',
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 20,
        padding: 0,
        paddingLeft: 35,
        paddingRight: 5
    }
});

export default SearchingFiled