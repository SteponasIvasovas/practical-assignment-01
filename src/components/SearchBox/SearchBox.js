import React, { Component } from 'react';
import classes from './searchBox.scss';
import { connect } from 'react-redux';
import { fetchStart } from './../../store/actions/index.js';
import { DATA_TYPE_IMAGES } from './../../config/config.js';

class SearchBox extends Component {
	state = {
		search: '',
	};
	handleInputChange = event => {
		this.setState({ search: event.target.value });
	};
	componentDidMount() {
		// fetch('https://api.unsplash.com/search/photos?query="dragon"', {
		// 	method: 'get',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: 'Client-ID 8562c2f049054e3362655e6f08875b84eb85b01d98c3083490408bcabd557f2d',
		// 	},
		// })
		// 	.then(response => {
		// 		response.headers.forEach(header => console.log(header));
		//
		// 		return response.json();
		// 	})
		// 	.then(data => {
		// 		console.log(data);
		// 	});
		this.props.fetchImages();
	}
	render() {
		console.log(this.props);
		return (
			<div className={`${classes.SearchBox} grid-search`}>
				<nav>
					<div className="nav-wrapper">
						<form>
							<div className="input-field">
								<input id="search" type="search" value={this.state.search} onChange={this.handleInputChange} required />
								<label className="label-icon" htmlFor="search">
									<i className="material-icons">search</i>
								</label>
								<i className="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		[DATA_TYPE_IMAGES]: state[DATA_TYPE_IMAGES],
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchImages: query => dispatch(fetchStart({ dataType: 'images', uri: 'www.images.lt' })),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBox);
