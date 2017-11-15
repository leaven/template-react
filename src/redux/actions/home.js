import { GET_HOME_TOPIC } from '../constants/home.js'
import { getHomeTopicApi } from 'api/home'

export function getHomeTopic(text) {
	return (dispatch, getState) => {
		getHomeTopicApi()
		.then(res => {
				dispatch({
					type: GET_HOME_TOPIC,
					res: res
				})
		})
	}
}
