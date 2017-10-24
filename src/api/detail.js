const API_PATH = '/api/detail'
const DOMAIN = process.env.NODE_ENV === 'production' ? '//www.baidu.com' : ''


export function getDetailTopic() {
	return fetch(`${DOMAIN}${API_PATH}/detailtopic`)
					.then(response => response.json())
}