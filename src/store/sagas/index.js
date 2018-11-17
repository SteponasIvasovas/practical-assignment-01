import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as aT from './../actionTypes/actionTypes.js';
import { fetchQuerySaga } from './queries.js';

export function* watchQuery() {
	yield takeLatest(aT.FETCH_START, fetchQuerySaga);
}
