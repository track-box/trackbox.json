var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
}
