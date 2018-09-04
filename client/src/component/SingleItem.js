import React, { Component } from 'react';
import axios from 'axios';
import EntryCard from './EntryCard';

class SingleItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			entries: {}	
		}
	}

	componentWillMount() {
		const id = this.props.match.params.id;
		axios.get(`/api/diary/${id}`).then((res) => {
			this.setState({
				loading: false,
				entries: res.data
			});
		});
	}

	render() {
		if(this.state.loading) {
			return (
				<h3>Loading...</h3>
			);
		};
		return(
			<div>
				<EntryCard data={this.state.entries.data} id={this.state.entries.id}/>
			</div>
		)
	}
}

export default SingleItem;