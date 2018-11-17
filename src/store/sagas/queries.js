import { fetchStart } from './../actions/index.js';
import * as aT from './../actionTypes/actionTypes.js';
import { put } from 'redux-saga/effects';

export function* fetchQuerySaga(action) {
	console.log(action);
	yield 'hello';
	// yield put(fetchStart());
}
