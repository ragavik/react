import React, { Component } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			entries: {}
		};
	}

	componentDidMount() {
		axios.get('/api/diary').then(response => {
			this.setState({
				loading: false,
				entries: response.data
			});
		});
	}

	render() {

		if(this.state.loading === true) {
			return (
				<h1>Loading..</h1>
			);
		}

		return(
			<ListItems>
				{this.renderEntries()}
			</ListItems>
		);
	}

	renderEntries() {
		return _.map(this.state.entries, entry => {
			return (
				<ListItem key={entry.id} id={entry.id} data={entry.data} />
			)
		});
	}
}

export default ItemsBody;