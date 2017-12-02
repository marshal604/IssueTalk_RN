import React from 'react'
import {
    Image,
    StyleSheet
} from 'react-native';

const Magnifer = () => (
    <Image
        style={styles.image}
        source={require('./icon/magnifer.png')}
    ></Image>
);

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 15
    }
});

export default Magnifer