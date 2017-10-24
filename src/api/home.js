const API_PATH = '/api/home'
const DOMAIN = process.env.NODE_ENV === 'production' ? '//www.baidu.com' : ''


export function getHomeTopic() {
	return fetch(`${DOMAIN}${API_PATH}/hometopic`)
					.then(response => response.json())
}