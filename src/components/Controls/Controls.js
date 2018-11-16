import React, { Fragment } from 'react';
import classes from './controls.scss';

const Controls = () => {
	return (
		<div className={`${classes.Controls} grid-controls`}>
			<a className="grid-search-button waves-effect waves-light btn-large">Search</a>
			<a className="grid-save-button waves-effect waves-light btn-large">Save</a>
		</div>
	);
};

export default Controls;
