import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SingleEntryEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data || ''
		};
		this.onChangeItem = this.onChangeItem.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChangeItem(event) {
		const name = event.target.name;
		this.setState({
			[name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		const { data } = this.state;
		const { id, history } = this.props;

		if(id) {
			axios.put(`/api/diary/${id}`, {
				data: data
			}).then(() => {
				this.props.updateState(data);
				this.props.toggleEdit();
			})
		} else {
			axios.post('/api/diary', { data: data }).then(() => {
				history.push('/');
			})
		}
	}

	render() {
		const { data } = this.state;
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="data">Journal Entry</label>
					<textarea name="data" className="form-control" id="data" value={data} onChange={this.onChangeItem} />
					<div className="d-flex justify-content-between align-items-center mt-3">
						<button type="submit" className="btn btn-primary">Submit</button>
						<button type="button" className="btn btn-danger" onClick={this.props.toggleEdit}>Cancel</button>
					</div>
				</div>
			</form>
		)
	}
}

export default withRouter(SingleEntryEdit);