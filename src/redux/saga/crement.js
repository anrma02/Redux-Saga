import { delay, put, takeEvery } from 'redux-saga/effects';
import { increment, decrement } from '~/redux/counterRedux';

function* incrementAsync(action) {
     yield delay(300);
     yield put(increment(action.payload));
 }
 
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