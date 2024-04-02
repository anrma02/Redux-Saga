import { delay, put, takeEvery } from 'redux-saga/effects';
import { increment, decrement } from '~/redux/actions/counterRedux';

// Saga sẽ chờ action 'INCREMENT_ASYNC' được gửi đến
function* incrementAsync(action) {
    yield delay(300);
    yield put(increment(action.payload));
}

// Saga sẽ chờ action 'DECREMENT_ASYNC' được gửi đến
function* decrementAsync(action) {
    yield delay(300);
    yield put(decrement(action.payload));
}

export function* incrementSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
export function* decrementSaga() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}
