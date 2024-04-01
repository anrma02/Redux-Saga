import { all, put, takeEvery, delay, fork, call } from 'redux-saga/effects';

import { increment, decrement } from '~/redux/counterRedux';
import { fetchApi, fetchFailure, fetchRequest, fetchSuccess } from './apiAction';

import { fetchTodosApi } from '~/service/fetchTodosApi';
import { fetchTodosFailure, fetchTodosSuccess } from './todoRedux';

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

function* getApiAsync() {
    try {
        yield put(fetchRequest());
        const data = yield call(fetchApi);
        yield put(fetchSuccess(data));
    } catch (error) {
        yield put(fetchFailure(error.message));
    }
}

export function* apiSaga() {
    yield takeEvery('FETCH_API', getApiAsync);
}

function* fetchTodosSaga() {
    try {
        yield put(fetchRequest());
        const todos = yield call(fetchTodosApi());
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error));
    }
}

export function* watchFetchTodos() {
    yield takeEvery('todos/fetchTodosRequest', fetchTodosSaga);
}

export default function* rootSaga() {
    yield all([fork(incrementSaga), fork(decrementSaga), fork(apiSaga), fork(watchFetchTodos)]);
}
