import { put, select } from 'redux-saga/effects';
import { fetchStart } from './../actions/index.js';
import * as aT from './../actionTypes/actionTypes.js';
import * as actions from './../actions';
import * as config from './../../config/config.js';
import generateQueryName from './../../utils/generateQueryName.js';

export function* fetchImagesSaga(action) {
	let cached = false;
	const cachedQuery = yield select(state => state[config.DATA_TYPE_IMAGES].queries[generateQueryName(action.query, action.page)]);

	if (cachedQuery) {
		const cachedImages = yield select(state => state[config.DATA_TYPE_IMAGES].data);
		cached = cachedQuery.dataIDs.every(imageID => cachedImages[imageID]);

		if (cached) {
			yield put(actions.imagesRequestSuccess({ ...cachedQuery, appendResult: action.appendResult, useSaved: action.useSaved }));
		}
	}

	if (!cached) {
		yield put(actions.imagesRequestStart());
		try {
			const response = yield fetch(config.API_IMAGES_SEARCH({ query: action.query, page: action.page }), {
				method: 'get',
				headers: {
					'content-type': 'application/json',
					authorization: `Client-ID ${config.ACCESS_KEY}`,
				},
			});

			if (!response.ok) throw Error(response.statusText);

			const data = yield response.json();
			const next = data.total_pages > action.page;
			const normalizedData = {};
			const dataIDs = [];

			if (data.results.length === 0) throw Error('Nothing found');

			data.results.forEach(image => {
				normalizedData[image.id] = { id: image.id, urls: image.urls };
				dataIDs.push(image.id);
			});

			yield put(
				actions.imagesRequestSuccess({
					data: normalizedData,
					dataIDs: dataIDs,
					query: action.query,
					page: action.page,
					appendResult: action.appendResult,
					next: next,
					useSaved: action.useSaved,
				})
			);
		} catch (error) {
			yield put(actions.imagesRequestFailure(error.message));
		}
	}
}

export function* filterImagesSaga(action) {
	const cachedQuery = yield select(state => state[config.DATA_TYPE_IMAGES].queries[action.queryName]);

	if (cachedQuery) {
		yield put(actions.imagesFilterQueryIDs(cachedQuery.dataIDs));
	}
}

export function* removeImageQuery(action) {
	let storedQueries = localStorage.getItem(config.DATA_TYPE_IMAGES);
	if (storedQueries) {
		storedQueries = JSON.parse(storedQueries);
		storedQueries = storedQueries.filter(queryName => queryName !== action.queryName);

		if (storedQueries.length > 0) localStorage.setItem(config.DATA_TYPE_IMAGES, JSON.stringify(storedQueries));
		else localStorage.removeItem(config.DATA_TYPE_IMAGES);

		yield put(actions.imagesRemoveSavedQuery(action.queryName));
	}
}

export function* saveImageQuery(action) {
	let storedQueries = localStorage.getItem(config.DATA_TYPE_IMAGES);
	if (storedQueries) {
		storedQueries = JSON.parse(storedQueries);

		if (storedQueries.includes(action.queryName)) return;

		storedQueries = [...storedQueries, action.queryName];
		localStorage.setItem(config.DATA_TYPE_IMAGES, JSON.stringify(storedQueries));
	} else {
		localStorage.setItem(config.DATA_TYPE_IMAGES, JSON.stringify([action.queryName]));
	}

	yield put(actions.imagesSaveQuery(action.queryName));
}

export function* loadImageQueries() {
	let storedQueries = localStorage.getItem(config.DATA_TYPE_IMAGES);
	if (storedQueries) {
		storedQueries = JSON.parse(storedQueries);
		yield put(actions.imagesLoadQueries(storedQueries));
	}
}
