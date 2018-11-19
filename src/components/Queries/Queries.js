import React, { Fragment, Component } from 'react';
import classes from './queries.scss';
import { connect } from 'react-redux';
import { DATA_TYPE_IMAGES } from './../../config/config.js';
import { imagesRequestInit, imagesFilterQueryInit, imagesRemoveSavedQueryInit } from './../../store/actions';
import decodeQueryName from './../../utils/decodeQueryName.js';

class Queries extends Component {
	state = {
		checked: {},
	};
	handleItemChecked(queryName) {
		this.setState(prevState => {
			let oldChecked = prevState.checked[queryName];

			if (oldChecked === undefined) oldChecked = false;

			if (!oldChecked) {
				const { query, page } = decodeQueryName(queryName);
				const test = this.props.fetchImages({ query: query, page: page, appendResult: true, useSaved: true });
			} else {
				this.props.filterImages(queryName);
			}

			return { checked: { ...prevState.checked, [queryName]: !oldChecked } };
		});
	}
	handleItemDelete(queryName) {
		this.props.deleteQuery(queryName);
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.useSaved && !this.props.useSaved) {
			this.setState({ checked: {} });
		}
	}
	render() {
		const savedQueriesUI = this.props.savedQueries.map(queryName => {
			return (
				<li className={`collection-item`} key={queryName}>
					<label>
						<input type="checkbox" checked={Boolean(this.state.checked[queryName])} onChange={() => this.handleItemChecked(queryName)} />
						<span>{queryName}</span>
					</label>
					<i className="material-icons" onClick={() => this.handleItemDelete(queryName)}>
						close
					</i>
				</li>
			);
		});

		const isCollectionEmpty = savedQueriesUI.length === 0;

		return (
			<div className={`grid-queries-list`}>
				<ul className={`${classes.Collection} collection`} style={{ display: isCollectionEmpty ? 'none' : 'block' }}>
					{savedQueriesUI}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		savedQueries: state[DATA_TYPE_IMAGES].status.savedQueries,
		useSaved: state[DATA_TYPE_IMAGES].status.useSaved,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchImages: params => dispatch(imagesRequestInit(params)),
		filterImages: queryName => dispatch(imagesFilterQueryInit(queryName)),
		deleteQuery: queryName => dispatch(imagesRemoveSavedQueryInit(queryName)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Queries);
