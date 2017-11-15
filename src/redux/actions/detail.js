import { GET_DETAIL_TOPIC } from '../constants/detail.js'
import { getDetailTopicApi } from 'api/detail.js'

export function getDetailTopic() {
	return (dispatch, getState) => {
		getDetailTopicApi()
		.then(res => {
			dispatch({
				type: GET_DETAIL_TOPIC,
				res: res.data
			})
		})
	}
}