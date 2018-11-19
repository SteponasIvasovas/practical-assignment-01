import { combineReducers } from 'redux';
import imageDataReducer from './data.js';
import imageQueriesReducer from './queries.js';
import imageRequestStatusReducer from './status.js';
import { DATA_TYPE_IMAGES } from './../../../config/config.js';

const dataType = () => DATA_TYPE_IMAGES;

const imagesReducer = combineReducers({
	dataType: dataType,
	data: imageDataReducer,
	queries: imageQueriesReducer,
	status: imageRequestStatusReducer,
});

export default imagesReducer;
