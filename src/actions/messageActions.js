import { FETCH_MESSAGES, NEW_MESSAGE } from './types';

export const fetchMessages = () => dispatch => {
		console.log('fetching')
		fetch('http://localhost:5000/api/messages')
				.then(res =>res.json())
				.then(data => dispatch({
					type: FETCH_MESSAGES,
					payload: data
		}))
}