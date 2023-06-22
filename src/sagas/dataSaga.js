import { call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_DATA,
    GET_DATA_SUCCEEDED,
    GET_DATA_FAILED
} from '../constants';
import DataService from '../api/dataService';

function* getDataAsync(action) {
    try {
        const data = yield call(DataService.fetchData);
        yield put({ type: GET_DATA_SUCCEEDED, payload: data.data });
    } catch (e) {
        yield put({ type: GET_DATA_FAILED, message: e.message });
    }
}

export function* watchGetDataAsync() {
    yield takeEvery(GET_DATA, getDataAsync);
}