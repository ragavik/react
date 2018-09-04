import React, { Component } from 'react';
import SingleEntry from './SingleEntry';
import SingleEntryEdit from './SingleEntryEdit';

class EntryCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			data: props.data
		}
		this.onEdit = this.onEdit.bind(this);
		this.updateState = this.updateState.bind(this);
	}

	onEdit() {
		this.setState({
			editing: !this.state.editing
		})
	}

	updateState(data) {
		this.setState({
			data: data
		})
	}

	render() {
		const { data } = this.state;
		if(this.state.editing) {
			return(
				<SingleEntryEdit data={data} toggleEdit={this.onEdit} id={this.props.id} updateState={this.updateState}/>
			)
		}
		return(
			<SingleEntry data={data} onEdit={this.onEdit} id={this.props.id}/>
		)
	}
}

export default EntryCard;