import * as types from '../../constants/'
import { getHomeTopic } from '../../../api/home.js'

export function enterHome(text) {
	return (dispatch, getState) => {
		getHomeTopic()
		.then(res => {
				dispatch({
					type: types.GET_HOME_TOPIC,
					res: res
				})
		})
	}
}
