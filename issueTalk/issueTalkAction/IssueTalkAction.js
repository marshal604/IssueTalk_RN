import dispatcher from '../Dispatcher';

export const CREATE_DATA = 'CREATE_DATA';
export const FETCH_DATA = 'FETCH_DATA';

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