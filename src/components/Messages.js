import React, { Component } from 'react'

class Messages extends Component {
	constructor(props){
		super(props)
		this.state= {
			messages: []
		}
	}

	componentWillMount(){
		console.log('mounted');
			fetch('http://localhost:5000/api/messages')
				.then(res =>res.json())
				.then(data => this.setState({ messages: data}))
	}

	render() {
		const messages = this.state.messages.map(message =>(
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

export default Messages