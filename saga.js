import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

// workers of saga
function* incrementAsync() {
    yield delay(2000)
    yield put({ type: 'INCREMENT' })
}

//watcher of saga
function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}

export function* helloSaga() {
    console.log('hello saga')
}