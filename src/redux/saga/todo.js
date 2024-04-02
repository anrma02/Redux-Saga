import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchTodosApi } from '~/service/fetchTodosApi';
import { fetchTodosFailure, fetchTodosSuccess } from '../actions/todoRedux';

// saga sẽ chờ action 'FETCH_API' được gửi đến
function* fetchTodosSaga() {
    try {
        const todos = yield call(fetchTodosApi);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

export function* watchFetchTodos() {
    yield takeEvery('todos/fetchTodosRequest', fetchTodosSaga);
}
