import * as aT from './../actionTypes/actionTypes.js';

export const fetchStart = ({ dataType, uri }) => {
	return {
		type: aT.FETCH_START,
		dataType: dataType,
		uri: uri,
	};
};
