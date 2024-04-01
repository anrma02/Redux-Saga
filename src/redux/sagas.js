import { all, put, takeEvery, delay, fork, call } from 'redux-saga/effects';
import { increment, decrement } from '~/redux/action/Counter';

import { fetchApi, fetchFailure, fetchRequest, fetchSuccess } from './action/apiAction';

function* incrementAsync(action) {
    yield delay(300);
    console.log('action', action);
    yield put(increment(action.payload));
}

function* decrementAsync(action) {
    yield delay(300);
    console.log('action', action);
    yield put(decrement(action.payload));
}

export function* incrementSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* decrementSaga() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

function* getApiAsync() {
    try {
        yield put(fetchRequest());
        const data = yield call(fetchApi);
        yield put(fetchSuccess(data[0]));
    } catch (error) {
        yield put(fetchFailure(error.message));
    }
}

export function* apiSaga() {
    yield takeEvery('FETCH_API', getApiAsync);
}

export default function* rootSaga() {
    yield all([fork(incrementSaga), fork(decrementSaga), fork(apiSaga)]);
}
