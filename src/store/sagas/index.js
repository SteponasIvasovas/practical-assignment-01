import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as aT from './../actionTypes/actionTypes.js';
import { fetchImagesSaga, filterImagesSaga, saveImageQuery, loadImageQueries, removeImageQuery } from './images.js';

export function* watchQuery() {
	yield takeLatest(aT.IMAGES_REQUEST_INIT, fetchImagesSaga);
	yield takeEvery(aT.IMAGES_FILTER_QUERY_INIT, filterImagesSaga);
	yield takeEvery(aT.IMAGES_SAVE_QUERY_INIT, saveImageQuery);
	yield takeEvery(aT.IMAGES_LOAD_QUERIES_INIT, loadImageQueries);
	yield takeEvery(aT.IMAGES_REMOVE_SAVED_QUERY_INIT, removeImageQuery);
}
