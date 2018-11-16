import React, { Fragment } from 'react';
import SearchBox from './../SearchBox/SearchBox.js';
import Controls from './../Controls/Controls.js';

const Top = () => {
	return (
		<div className="grid-top">
			<SearchBox />
			<Controls />
		</div>
	);
};

export default Top;
