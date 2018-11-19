import React from 'react';
import classes from './searchBox.scss';
import { imagesRequestInit } from './../../store/actions/index.js';

const SearchBox = props => {
	return (
		<div className={`${classes.SearchBox} full-stretch`}>
			<nav>
				<div className="nav-wrapper">
					<form onSubmit={props.onSubmit}>
						<div className="input-field">
							<input id="search" type="search" value={props.value} onChange={props.onChange} required />
							<label className="label-icon" htmlFor="search">
								<i className="material-icons">search</i>
							</label>
							<i className="material-icons" onClick={props.onClear}>
								close
							</i>
						</div>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default SearchBox;
