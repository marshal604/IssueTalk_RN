import dispatcher from '../Dispatcher';

export const CREATE_DATA = 'CREATE_DATA';
export const FETCH_DATA = 'FETCH_DATA';
export const SAY_HI = 'SAY_HI';
export const SAY_HI_AND_CALLBACK = 'SAY_HI_AND_CALLBACK';
export const SAY_HI_AND_PROMISE = 'SAY_HI_AND_PROMISE';

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

export function sayHiAndCallback(text, fn) {
    dispatcher.dispatch({
        type: SAY_HI_AND_CALLBACK,
        text: text,
        fn:  fn
    })
}

export function sayHiAndPromise(text, fn) {
    dispatcher.dispatch({
        type: SAY_HI_AND_PROMISE,
        text: text,
        fn: fn
    })
}