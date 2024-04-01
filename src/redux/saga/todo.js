import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchTodosApi } from '~/service/fetchTodosApi';

import { fetchRequest } from '../apiAction';
import { fetchTodosFailure, fetchTodosSuccess } from '../todoRedux';

function* fetchTodosSaga() {
    try {
        yield put(fetchRequest());
        const todos = yield call(fetchTodosApi);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

export function* watchFetchTodos() {
    yield takeEvery('todos/fetchTodosRequest', fetchTodosSaga);
}
