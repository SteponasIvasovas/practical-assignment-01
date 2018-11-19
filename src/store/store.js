import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import imagesReducer from './reducers/images';
import { watchQuery } from './sagas';
import { DATA_TYPE_IMAGES } from './../config/config.js';

const rootReducer = combineReducers({
	[DATA_TYPE_IMAGES]: imagesReducer,
});

// const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, loggerMiddleware));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchQuery);

export default store;
