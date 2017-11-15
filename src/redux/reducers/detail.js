import { GET_DETAIL_TOPIC } from '../constants/detail.js'

const initState = {
	details: []
}

export default function(state=initState, action) {
	switch(action.type) {
		case GET_DETAIL_TOPIC: 
			return Object.assign(
				{},
				state,
				{
					details: action.res
				}
			)
		default: 
			return state
	}
}