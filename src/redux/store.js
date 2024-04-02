import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '~/redux/actions/counterRedux';
import apiReducer from '~/redux/actions/producRedux';
import todoReducer from '~/redux/actions/todoRedux';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
};

const store = configureStore({
    reducer: {
        api: apiReducer,
        todo: todoReducer,
        counter: counterReducer,
    },
    middleware: middleware,
});

sagaMiddleware.run(rootSaga);
export default store;
