const path = require('path')

module.exports = function(dpack) {
	// dpack.set('entry', [path.resolve(process.cwd(), 'src/bootstrap.js')])
	// dpack.set('resolve.alias', {
	// 	'api': path.resolve('./src/api'),
	// 	'components': path.resolve('./src/components')
	// })
	dpack.set({
		'entry': [path.resolve(process.cwd(), 'src/bootstrap.js')],
		'resolve.alias': {
			'api': path.resolve('./src/api'),
			'components': path.resolve('./src/components')
		}
	})
	// return dpack
}