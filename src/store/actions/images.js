import * as aT from './../actionTypes/actionTypes.js';

export const imagesRequestInit = ({ query = '', page = 1, appendResult = false, useSaved = false }) => {
	return {
		type: aT.IMAGES_REQUEST_INIT,
		query: query,
		page: page,
		appendResult: appendResult,
		useSaved: useSaved,
	};
};

export const imagesRequestStart = () => {
	return {
		type: aT.IMAGES_REQUEST_START,
	};
};

export const imagesRequestFailure = error => {
	return {
		type: aT.IMAGES_REQUEST_FAILURE,
		error: error,
	};
};

export const imagesRequestSuccess = ({ data, dataIDs, query, page, next, appendResult, useSaved }) => {
	return {
		type: aT.IMAGES_REQUEST_SUCCESS,
		data: data,
		dataIDs: dataIDs,
		query: query,
		page: page,
		next: next,
		appendResult: appendResult,
		useSaved: useSaved,
	};
};

export const imagesSaveQueryInit = queryName => {
	return {
		type: aT.IMAGES_SAVE_QUERY_INIT,
		queryName: queryName,
	};
};

export const imagesSaveQuery = queryName => {
	return {
		type: aT.IMAGES_SAVE_QUERY,
		queryName: queryName,
	};
};

export const imagesRemoveSavedQueryInit = queryName => {
	return {
		type: aT.IMAGES_REMOVE_SAVED_QUERY_INIT,
		queryName: queryName,
	};
};

export const imagesRemoveSavedQuery = queryName => {
	return {
		type: aT.IMAGES_REMOVE_SAVED_QUERY,
		queryName: queryName,
	};
};

export const imagesFilterQueryInit = queryName => {
	return {
		type: aT.IMAGES_FILTER_QUERY_INIT,
		queryName: queryName,
	};
};

export const imagesFilterQueryIDs = dataIDs => {
	return {
		type: aT.IMAGES_FILTER_QUERY_IDS,
		dataIDs: dataIDs,
	};
};

export const imagesClearError = () => {
	return {
		type: aT.IMAGES_CLEAR_ERROR,
	};
};

export const imagesLoadQueriesInit = () => {
	return {
		type: aT.IMAGES_LOAD_QUERIES_INIT,
	};
};

export const imagesLoadQueries = savedQueries => {
	return {
		type: aT.IMAGES_LOAD_QUERIES,
		savedQueries: savedQueries,
	};
};
