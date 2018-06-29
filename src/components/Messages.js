import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { fetchMessages } from '../actions/messageActions';

class Messages extends Component {
	componentWillMount(){
		this.props.fetchMessages();
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

const mapStateToProps = state => ({
	messages: state.messages.items
})

export default connect(mapStateToProps, { fetchMessages })(Messages)