const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: '[name].chunk.js',
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: require.resolve('babel-loader'),
				options: {
					// This is a feature of `babel-loader` for webpack (not Babel itself).
					// It enables caching results in ./node_modules/.cache/babel-loader/
					// directory for faster rebuilds.
					cacheDirectory: true,
					plugins: ['react-hot-loader/babel'],
				},
			},
			{
				test: /\.css$/,
				use: [require.resolve('style-loader'), require.resolve('css-loader')],
			},
			{
				test: /\.scss$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64:5]',
						},
					},
					require.resolve('sass-loader'),
				],
			},
		],
	},
	devServer: {
		port: 3500,
		publicPath: '/',
		historyApiFallback: true,
		hotOnly: true,
		// hot: true,
		contentBase: path.resolve(__dirname, 'public'),
		watchContentBase: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: path.resolve(__dirname, 'build/index.html'),
			title: 'Mediapark practical assignment',
			minify: true,
			inject: 'body',
		}),
	],
};
