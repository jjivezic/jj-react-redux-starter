
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas/sagas';
import { url } from '../environment';
const loggerMiddleware = createLogger();
// const sagaMiddleware = createSagaMiddleware()
// export const store = createStore(
//     rootReducer,
//     url === 'prod' ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, loggerMiddleware)
// )
// sagaMiddleware.run(rootSaga);

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