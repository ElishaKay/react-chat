import React, { Component } from 'react'

class MessageForm extends Component {
	constructor(props){
		super(props)
		this.state= {
			sender: '',
			message: ''
		}

		this.onChange = this.onChange.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		return (
		<div>
			<h1>Add Message</h1>
			<form>
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