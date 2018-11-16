import React from 'react';
import { hot } from 'react-hot-loader';
import Top from './../Top/Top.js';
import Gallery from './../Gallery/Gallery.js';
import Queries from './../Queries/Queries.js';

const Layout = () => {
	return (
		<div className="grid-container">
			<Top />
			<Gallery />
			<Queries />
		</div>
	);
};

export default hot(module)(Layout);
