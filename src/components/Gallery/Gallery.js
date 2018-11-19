import React, { Fragment, Component } from 'react';
import classes from './gallery.scss';
import withDataType from './../../hoc/withDataType.js';
import { DATA_TYPE_IMAGES } from './../../config/config.js';
import Masonry from 'react-masonry-component';
import { imagesRequestInit, imagesClearError } from './../../store/actions';
import { Lightbox } from 'react-modal-image';

class Gallery extends React.Component {
	state = {
		lightboxOpen: false,
		imageUrl: '',
	};
	handleOpenLightbox(imageUrl) {
		this.setState({ lightboxOpen: true, imageUrl: imageUrl });
	}
	handleCloseLightbox = () => {
		this.setState({ lightboxOpen: false });
	};
	render() {
		const images = (this.props.data || []).map(image => {
			return (
				<img
					src={image.urls.thumb}
					large={image.urls.regular}
					key={image.id}
					className={classes.GalleryItem}
					onClick={() => this.handleOpenLightbox(image.urls.regular)}
				/>
			);
		});

		let loadMoreButton;
		if (this.props.fetchMore && !this.props.status.useSaved) {
			loadMoreButton = (
				<div className={`content-center ${classes.LoadButtonContainer}`}>
					<a className="grid-save-button waves-effect waves-light cyan darken-2 btn-large" onClick={this.props.fetchMore}>
						Load more...
					</a>
				</div>
			);
		}

		return (
			<Fragment>
				{this.state.lightboxOpen && <Lightbox large={this.state.imageUrl} onClose={this.handleCloseLightbox} />}
				<Masonry options={{ percentPosition: true }}>
					{images}
					{loadMoreButton}
				</Masonry>
			</Fragment>
		);
	}
}

export default withDataType(Gallery, DATA_TYPE_IMAGES, imagesRequestInit, imagesClearError);
