import React, { Component } from 'react';
import { connect } from 'react-redux';

const withQuery = Component => {
	const mapStateToProps = state => {};

	const mapDispatchToProps = state => {};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(
		class extends Component {
			render() {}
		}
	);
};

export default withQuery;
