import React from 'react';
import classes from './searchBox.scss';

const SearchBox = () => {
	return (
		<nav className={classes.SearchBox}>
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input id="search" type="search" required />
						<label className="label-icon" for="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

export default SearchBox;
