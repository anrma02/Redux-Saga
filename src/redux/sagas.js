import { all, fork } from 'redux-saga/effects';

import { decrementSaga, incrementSaga } from './saga/crement';
import { apiSaga } from './saga/getApi';
import { watchFetchTodos } from './saga/todo';

export default function* rootSaga() {
    yield all([fork(incrementSaga), fork(decrementSaga), fork(apiSaga), fork(watchFetchTodos)]);
}
