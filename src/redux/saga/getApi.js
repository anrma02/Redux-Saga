import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodosFailure, fetchTodosRequest, fetchTodosSuccess } from '../todoRedux';
import { fetchApi } from '../apiAction';

function* getApiAsync() {
    try {
        yield put(fetchTodosRequest());
        const data = yield call(fetchApi);
        yield put(fetchTodosSuccess(data));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

export function* apiSaga() {
    yield takeEvery('FETCH_API', getApiAsync);
}
