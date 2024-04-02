import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchApi } from '../actions/producRedux';

// saga sẽ chờ action 'FETCH_API' được gửi đến
function* getApiAsync() {
    try {
        const data = yield call(fetchApi);
        yield put(fetchApi.fulfilled(data));
    } catch (error) {
        yield put(fetchApi.rejected(error.message));
    }
}
export function* apiSaga() {
    yield takeEvery('FETCH_API', getApiAsync);
}
