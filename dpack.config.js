const path = require('path')

module.exports = function(WebpackConfig) {
	WebpackConfig.entry = [path.resolve(process.cwd(), 'src/bootstrap.js')]
	// WebpackConfig.plugins['html-webpack-plugin'] = 
	return WebpackConfig
}