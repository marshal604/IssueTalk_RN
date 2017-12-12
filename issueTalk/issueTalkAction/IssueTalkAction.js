import dispatcher from '../Dispatcher';

export const CREATE_DATA = 'CREATE_DATA';
export const FETCH_DATA = 'FETCH_DATA';
export const SAY_HI = 'SAY_HI';

export function creatData(number) {
    dispatcher.dispatch({
        type: CREATE_DATA,
        number: number
    });
}

export function fetchData() {
    dispatcher.dispatch({
        type: FETCH_DATA
    });
}

export function sayHi(text) {
    dispatcher.dispatch({
        type: SAY_HI,
        text: text
    })
}