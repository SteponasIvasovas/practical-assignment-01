const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src/index.js'),
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: '[name].chunk.js',
	},
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: path.resolve(__dirname, 'build/index.html'),
			title: 'Mediapark practical assignment',
			minify: true,
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
};
