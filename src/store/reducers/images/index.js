import { combineReducers } from 'redux';
import imageDataReducer from './data.js';
import imageQueriesReducer from './queries.js';
import imageRequestStatusReducer from './status.js';
import { DATA_TYPE_IMAGES } from './../../../config/config.js';

const initialState = DATA_TYPE_IMAGES;

function dataType(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

const imagesReducer = combineReducers({
	dataType: dataType,
	data: imageDataReducer,
	queries: imageQueriesReducer,
	status: imageRequestStatusReducer,
});

export default imagesReducer;

// export default function(state = initialState, action) {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// }
