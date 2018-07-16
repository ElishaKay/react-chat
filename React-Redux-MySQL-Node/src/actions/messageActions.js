import { FETCH_MESSAGES, NEW_MESSAGE } from './types';

export const fetchMessages = () => dispatch => {
		console.log('fetching')
		fetch('http://localhost:5000/api/messages')
				.then(res =>res.json())
				.then(messages => dispatch({
					type: FETCH_MESSAGES,
					payload: messages
		}))
}

export const createMessage = (messageData) => dispatch => {
		console.log('createMessage function called')
		fetch('http://localhost:5000/api/newmessage', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(messageData)
		})
			.then(res => res.json())
			.then(message => dispatch({
					type: NEW_MESSAGE,
					payload: message
		}))
}