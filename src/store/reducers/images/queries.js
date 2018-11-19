import * as aT from './../../actionTypes/actionTypes.js';
import generateQueryName from './../../../utils/generateQueryName.js';

const initialState = {};

function imagesRequestSuccess(state, action) {
	if (!action.query) return state;

	return {
		...state,
		[generateQueryName(action.query, action.page)]: {
			name: generateQueryName(action.query, action.page),
			query: action.query,
			page: action.page,
			dataIDs: action.dataIDs,
			next: action.next,
		},
	};
}

export default function(state = initialState, action) {
	switch (action.type) {
		case aT.IMAGES_REQUEST_SUCCESS:
			return imagesRequestSuccess(state, action);
		default:
			return state;
	}
}
