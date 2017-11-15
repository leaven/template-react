import { GET_HOME_TOPIC } from '../constants/home.js'

const initState = {
	topics: []
}

export default function(state=initState, action) {
	switch(action.type) {
		case GET_HOME_TOPIC: 
			return Object.assign(
				{}, 
				state, 
				{
					topics: action.res.data
				}
			)
		default: 
			return state
	}
}