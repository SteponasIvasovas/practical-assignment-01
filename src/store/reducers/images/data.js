import * as aT from './../../actionTypes/actionTypes.js';

const initialState = {};

function imagesRequestSuccess(state, action) {
	if (!action.data) return state;

	return { ...state, ...action.data };
}

export default function(state = initialState, action) {
	switch (action.type) {
		case aT.IMAGES_REQUEST_SUCCESS:
			return imagesRequestSuccess(state, action);
		default:
			return state;
	}
}
