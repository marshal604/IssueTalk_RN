import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class IssueListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = props.rowData;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.key}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 2
    },
    text: {
        fontSize: 20
    }
});

export default IssueListItem;