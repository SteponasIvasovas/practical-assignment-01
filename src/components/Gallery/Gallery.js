import React from 'react';
import classes from './gallery.scss';

const Gallery = () => {
	return (
		<div className="grid-gallery">
			<div className={`${classes.Gallery} card-panel`} />
		</div>
	);
};

export default Gallery;
