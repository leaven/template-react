const path = require('path')

module.exports = 	{
	'entry': [path.resolve(process.cwd(), 'src/bootstrap.js')],
	'resolve':{
		'alias': {
			'api': path.resolve('./src/api'),
			'components': path.resolve('./src/components')
		}
	}
}