const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
	mode: 'development',
	target: 'node',
	entry: {
		server: './index.js'
	},
	output: {
		path: __dirname,
		filename: 'server_bundle.js',
		chunkFilename: '[name].js',
		publicPath: './'
	},
	module: {
		rules: [{
			test: /\.ts(x?)$/,
			use: ['babel-loader', 'ts-loader']
		}, {
			test: /js$/,
			use: ['babel-loader']
		}, {
			test: /\.(s?)css$/,
			use: [{
				loader: 'css-loader',
				options: {
					modules: true
				}
			}, 'sass-loader']
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', '.scss']
	},
	externals: [nodeExternals()]
}