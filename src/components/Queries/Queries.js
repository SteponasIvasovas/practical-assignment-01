import React from 'react';
import Select from 'react-select';
import classes from './queries.scss';

const Queries = () => {
	return (
		<div className="grid-queries">
			<div className={`${classes.SelectContainer} grid-queries-select`}>
				<Select className={`${classes.Select}`} />
			</div>
			<div className="grid-queries-list">
				<ul className={`${classes.Collection} collection`}>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
					<li className="collection-item">Placeholder</li>
				</ul>
			</div>
		</div>
	);
};

export default Queries;
