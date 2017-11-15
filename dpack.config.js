const path = require('path')

module.exports = function(WebpackConfig) {
	WebpackConfig.entry = [path.resolve(process.cwd(), 'src/bootstrap.js')]
	WebpackConfig.resolve.alias = {
		'api': path.resolve('./src/api'),
		'components': path.resolve('./src/components')
	}
	return WebpackConfig
}