var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
}
