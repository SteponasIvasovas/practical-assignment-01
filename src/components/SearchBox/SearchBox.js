import React from 'react';
import classes from './searchBox.scss';

const SearchBox = () => {
	return (
		<div className={`${classes.SearchBox} grid-search`}>
			<nav>
				<div className="nav-wrapper">
					<form>
						<div className="input-field">
							<input id="search" type="search" required />
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
};

export default SearchBox;
