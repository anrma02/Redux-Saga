import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '~/redux/action/Counter';
import apiReducer from '~/redux/action/apiAction';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
};

const store = configureStore({
    reducer: {
        api: apiReducer,
        counter: counterReducer,
    },
    middleware: middleware,
});

sagaMiddleware.run(rootSaga);
export default store;
