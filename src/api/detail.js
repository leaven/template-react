const API_PATH = '/api/detail'
const DOMAIN = process.env.NODE_ENV === 'production' ? '//www.baidu.com' : ''


export function getDetailTopicApi() {
	return fetch('/api/v1/topics')
					.then(response => response.json())
}