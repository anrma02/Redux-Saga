import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addProductFailure, addProductSuccess } from '../actions/producRedux';

/**
 * Fetch post product
 * @param {object} action - action type và payload
 * @return {object} - response trả về sau khi post
 * @throws {error} - lỗi khi post thất bại
 */

function* fetchPostProduct(action) {
    try {
        const response = yield call(axios.post, 'https://fakestoreapi.com/products', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload),
        });
        yield put(addProductSuccess(response));
    } catch (error) {
        yield put(addProductFailure(error));
    }
}

export function* postProductSaga() {
    yield takeEvery('POST_API', fetchPostProduct);
}
