import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center align-items-center mb-3">
				<Link to="/" className="navbar-brand" href="#">myPaperDiary</Link>
			</nav>
			<div className="navbar fixed-bottom">
				<Link to="/new" className="btn btn-outline-primary w-100 p-3">Add New Entry</Link>
			</div>
		</div>
	);
}

export default TopNav;