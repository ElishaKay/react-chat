import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { fetchMessages } from '../actions/messageActions';

class Messages extends Component {
	componentWillMount(){
		this.props.fetchMessages();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newMessage){
			this.props.messages.unshift(nextProps.newMessage)
		}
	}

	render() {
		const messages = this.props.messages.map(message =>(
			<div key={message.message_id}>
				<span>{message.sender}: {message.message_content}</span>
			</div>
		));
		return (
		<div>
			<h1>Messages</h1>
			{messages}
		</div>
		)
	}
}

Messages.propTypes = {
	fetchMessages: PropTypes.func.isRequired,
	messages: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	messages: state.messages.items,
	newMessage: state.messages.item
})

export default connect(mapStateToProps, { fetchMessages })(Messages)