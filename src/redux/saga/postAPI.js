import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addProductFailure, addProductRequest, addProductSuccess } from '../actions/producRedux';

function* fetchPostProduct(action) {
    try {
        yield put(addProductRequest());
        const response = yield call(axios.post, 'https://fakestoreapi.com/products', action.payload);
        yield put(addProductSuccess(response));
    } catch (error) {
        yield put(addProductFailure(error));
    }
}

export function* postProductSaga() {
    yield takeEvery('POST_API', fetchPostProduct);
}
