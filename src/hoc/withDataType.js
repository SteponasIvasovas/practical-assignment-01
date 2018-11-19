import React from 'react';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import classes from './withDataType.scss';
import removeDuplicates from './../utils/removeDuplicates.js';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

const withDataType = (Component, dataType, fetchAction, clearErrorAction) => {
	const mapStateToProps = state => {
		return {
			status: state[dataType].status,
			data: state[dataType].data,
		};
	};

	const mapDispatchToProps = dispatch => {
		return {
			fetchMore: params => dispatch(fetchAction(params)),
			clearError: () => dispatch(clearErrorAction()),
		};
	};

	const mergeProps = (stateProps, dispatchProps, ownProps) => {
		const mergedProps = {
			status: stateProps.status,
			data: stateProps.data,
			clearError: dispatchProps.clearError,
			...ownProps,
		};

		if (stateProps.status.lastQuery && stateProps.status.lastQuery.next) {
			return {
				...mergedProps,
				fetchMore: () =>
					dispatchProps.fetchMore({
						query: stateProps.status.lastQuery.query,
						page: Number(stateProps.status.lastQuery.page) + 1,
						appendResult: true,
					}),
			};
		} else {
			return mergedProps;
		}
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(props => {
		const { status, data, fetchMore, ...rest } = props;
		const displayData = removeDuplicates(status.dataIDs.map(id => data[id]).filter(element => element));

		let statusUI = (
			<SweetAlert
				show={Boolean(status.error)}
				type="warning"
				text={status.error}
				title="Warning"
				onConfirm={props.clearError}
				onEscapeKey={props.clearError}
				onOutsideClick={props.clearError}
			/>
		);

		if (status.fetching) {
			statusUI = (
				<div className={`full-stretch content-center ${classes.Loader}`}>
					<CircleLoader size={150} color={'#ffffff'} />
				</div>
			);
		} else if (status.error) {
			//SweetAlert component doesn't hide if rendered here
		}

		return (
			<div className="full-stretch">
				{statusUI}
				<Component data={displayData} fetchMore={fetchMore} status={status} {...rest} />
			</div>
		);
	});
};

export default withDataType;
