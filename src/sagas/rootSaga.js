import { all, fork } from 'redux-saga/effects';
import * as dataSaga from './dataSaga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        fork(dataSaga.watchGetDataAsync)
    ]);
}