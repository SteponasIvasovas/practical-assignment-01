import React, { Fragment, Component } from 'react';
import SearchBox from './../SearchBox/SearchBox.js';
import { connect } from 'react-redux';
import classes from './top.scss';
import { imagesRequestInit, imagesSaveQueryInit } from './../../store/actions';
import { DATA_TYPE_IMAGES } from './../../config/config.js';

class Top extends Component {
	state = {
		searchQuery: '',
	};
	handleSearchInputChange = event => {
		this.setState({ searchQuery: event.target.value });
	};
	handleSearchQuerySubmit = event => {
		event.preventDefault();
		this.props.fetchImages({ query: this.state.searchQuery, page: 1, appendResult: false });
	};
	handleClearClick = () => {
		this.setState({ searchQuery: '' });
	};
	handleSaveLastQuery = () => {
		if (this.props.lastQuery) this.props.saveQuery(this.props.lastQuery.name);
	};
	render() {
		let saveLastButtonDisabled = true;
		if (this.props.lastQuery) saveLastButtonDisabled = false;

		return (
			<Fragment>
				<div className="grid-search">
					<SearchBox
						value={this.state.searchQuery}
						onChange={this.handleSearchInputChange}
						onSubmit={this.handleSearchQuerySubmit}
						onClear={this.handleClearClick}
					/>
				</div>
				<div className="grid-controls">
					<a
						className={`grid-search-button waves-effect waves-light cyan darken-2 btn-large ${classes.ControlButton}`}
						onClick={this.handleSearchQuerySubmit}
					>
						Search
					</a>
					<a
						className={`grid-save-button waves-effect waves-light cyan darken-2 btn-large ${classes.ControlButton}`}
						onClick={this.handleSaveLastQuery}
						disabled={saveLastButtonDisabled}
					>
						Save last
					</a>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		lastQuery: state[DATA_TYPE_IMAGES].status.lastQuery,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchImages: params => dispatch(imagesRequestInit(params)),
		saveQuery: queryName => dispatch(imagesSaveQueryInit(queryName)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Top);
