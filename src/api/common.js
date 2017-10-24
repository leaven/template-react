const API_PATH = '/api/common'
const DOMAIN = process.env.NODE_ENV === 'production' ? '//www.baidu.com' : ''


export function getCommonTopic() {
	return fetch(`${DOMAIN}${API_PATH}/commontopic`)
					.then(response => response.json())
}