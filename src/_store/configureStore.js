
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas/sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.REACT_APP_ENVIROMENT !== 'prod') {
    middlewares.push(loggerMiddleware);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;