import * as aT from './../../actionTypes/actionTypes.js';
import generateQueryName from './../../../utils/generateQueryName.js';
import filterOnce from './../../../utils/filterOnce.js';

const initialState = {
	fetching: false,
	error: null,
	dataIDs: [],
	lastQuery: null,
	savedQueries: [],
	useSaved: false,
};

function imagesRequestStart(state, action) {
	return { ...state, error: null, fetching: true };
}

function imagesRequestSuccess(state, action) {
	const useSavedSame = state.useSaved === action.useSaved;
	let updatedDataIDs;
	if (action.appendResult && useSavedSame) updatedDataIDs = [...state.dataIDs, ...action.dataIDs];
	else updatedDataIDs = [...action.dataIDs];

	return {
		...state,
		error: null,
		fetching: false,
		dataIDs: updatedDataIDs,
		useSaved: action.useSaved,
		lastQuery: {
			name: generateQueryName(action.query, action.page),
			page: action.page,
			query: action.query,
			dataIDs: action.dataIDs,
			next: action.next,
		},
	};
}

function imagesRequestFailure(state, action) {
	return { ...state, error: action.error, fetching: false };
}

function imagesSaveQuery(state, action) {
	return { ...state, savedQueries: [...state.savedQueries, action.queryName] };
}

function imagesFilterQueryIDs(state, action) {
	let filteredDataIDs = filterOnce(state.dataIDs, action.dataIDs);
	return { ...state, dataIDs: filteredDataIDs };
}

function imagesRemoveSavedQuery(state, action) {
	return { ...state, savedQueries: state.savedQueries.filter(queryName => queryName !== action.queryName) };
}

function imagesClearError(state, action) {
	return { ...state, error: null };
}

function imagesLoadQueries(state, action) {
	return { ...state, savedQueries: action.savedQueries };
}

export default function(state = initialState, action) {
	switch (action.type) {
		case aT.IMAGES_REQUEST_START:
			return imagesRequestStart(state, action);
		case aT.IMAGES_REQUEST_SUCCESS:
			return imagesRequestSuccess(state, action);
		case aT.IMAGES_REQUEST_FAILURE:
			return imagesRequestFailure(state, action);
		case aT.IMAGES_SAVE_QUERY:
			return imagesSaveQuery(state, action);
		case aT.IMAGES_FILTER_QUERY_IDS:
			return imagesFilterQueryIDs(state, action);
		case aT.IMAGES_REMOVE_SAVED_QUERY:
			return imagesRemoveSavedQuery(state, action);
		case aT.IMAGES_CLEAR_ERROR:
			return imagesClearError(state, action);
		case aT.IMAGES_LOAD_QUERIES:
			return imagesLoadQueries(state, action);
		default:
			return state;
	}
}
