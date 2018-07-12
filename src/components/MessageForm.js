 import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { createMessage } from '../actions/messageActions';

class MessageForm extends Component {
	constructor(props){
		super(props)
		this.state= {
			sender: '',
			message: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e){
		e.preventDefault()

		const message = {
			sender: this.state.sender,
			message: this.state.message
		}

		//Call Action
		this.props.createMessage(message);
	}

	render() {
		return (
		<div>
			<h1>Add Message</h1>
			<form onSubmit={this.onSubmit}>
				<div>	
					<label>Name </label><br />
					<input type="text" name="sender" 
						onChange={this.onChange} value={this.state.sender}/>
				</div>
				<br />
				<div>
					<label>Message </label><br />
					<textarea name="message" 
						onChange={this.onChange} value={this.state.message}/>
				</div>
				<br />

				<button type="submit">Submit</button>
			</form>
		</div>
		)
	}
}

MessageForm.propTypes = {
	createMessage: PropTypes.func.isRequired
};

export default connect(null, { createMessage })(MessageForm)