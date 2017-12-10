import React from 'react'
import * as F from 'firebase'

export const initMyFirebase = () => {
    F.initializeApp({
        apiKey: "AIzaSyD1nrvfy_ki1Ix1MOOxHCpN9i30umGJOt8",
        authDomain: "react-native-issuetalk.firebaseapp.com"
    });
};

export const url = () => {
    return 'https://react-native-issuetalk.firebaseio.com/data.json';
};

export type MyFirebase = initMyFirebase | url;