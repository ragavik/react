import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleEntry = ({ data, onEdit, id, history }) => {
	return(
		<div className="card">
			<div className="card-block">
				<div className="card-title bg-success text-white">
					<h4>Entry</h4>
				</div>
				<div className="card-text">
					<h4>{data}</h4>
				</div>
				<div className="d-flex justify-content-between align-items-end mt-3">
					<button className="btn btn-link" onClick={() => {
						axios.delete(`/api/diary/${id}`).then(() => {
							history.push('/');
						});
					}}>Delete</button>
					<button className="btn btn-link" onClick={onEdit}>Edit</button>
				</div>
			</div>
		</div>
	)
};

export default withRouter(SingleEntry);