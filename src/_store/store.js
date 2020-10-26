import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const middlewares = [thunkMiddleware];

if (process.env.REACT_APP_ENVIROMENT !== 'prod') {
    middlewares.push(loggerMiddleware);
}

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

