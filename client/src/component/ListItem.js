import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ id, data }) => {
	return(
		<Link to={`/${id}`} className={`list-group-item mb-3 `}>{id} - {data}</Link>
	);
}

export default ListItem;