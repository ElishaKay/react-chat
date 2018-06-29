import React, { Component } from 'react'

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

		console.log('Message in the DOM after submit',message);

		fetch('http://localhost:5000/api/newmessage', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(message)
		})
			.then(res => res.json())
			.then(data => console.log(data))
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

export default MessageForm