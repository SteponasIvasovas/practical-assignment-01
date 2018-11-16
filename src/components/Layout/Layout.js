import React from 'react';
import classes from './layout.scss';
import { hot } from 'react-hot-loader';
import SearchBox from './../SearchBox/SearchBox.js';

const Layout = () => {
	console.log(classes);
	return (
		<div className={classes.Container}>
			<div className={classes.Search}>
				<SearchBox />
			</div>
			<div className={classes.Gallery}>Gallery</div>
			<div className={classes.Controls}>Controls</div>
			<div className={classes.Queries}>Queries</div>
		</div>
	);
};

export default hot(module)(Layout);
