import * as types from '../../constants/'
const initState = {
	topics: []
}

export default function(state=initState, action) {
	console.log(action)
	switch(action.type) {
		case types.GET_HOME_TOPIC: 
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