module.exports = {
	'/api/v1/topics': {
		proxy: {
			target: 'https://cnodejs.org',
			changeOrigin: true
		},
		useMock: false,
		mock: {
			"success|boolean": true,
			"data": {
				"id": /\d{10}/
			}
		}
	},
	'/api/home/hometopic': {
		proxy: {
			target: 'https://cnodejs.org',
			changeOrigin: true
		},
		useMock: true,
		mock: {
			"errno|1": [0, 20002], 
			"data|1-10": [{
				"id": /\d{10}/,
				"topic|1": [
					'Hello World',
					'你好',
					'欢迎来到React世界',
					'这是首页'
				]
			}]
		}
	}
}