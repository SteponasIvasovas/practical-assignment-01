import React from 'react';
import { hot } from 'react-hot-loader';
import Top from './../Top/Top.js';
import Gallery from './../Gallery/Gallery.js';
import Queries from './../Queries/Queries.js';

const Layout = () => {
	return (
		<div className="grid-container">
			<div className="grid-top">
				<Top />
			</div>
			<div className="grid-gallery">
				<Gallery />
			</div>
			<div className="grid-queries">
				<Queries />
			</div>
		</div>
	);
};

export default hot(module)(Layout);
