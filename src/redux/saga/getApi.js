import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodosFailure } from '../todoRedux';
import { fetchApi, fetchRequest, fetchSuccess } from '../apiAction';

// saga sẽ chờ action 'FETCH_API' được gửi đến
function* getApiAsync() {
    try {
        yield put(fetchRequest());
        const data = yield call(fetchApi);
        yield put(fetchSuccess(data));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

export function* apiSaga() {
    yield takeEvery('FETCH_API', getApiAsync);
}
