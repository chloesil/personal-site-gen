var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var dir = 'dist';

module.exports = {
   entry: {
      app: "./src/js/app.js",
      styles: './src/scss/main.scss'
   },
	output: {
   	path: path.join(__dirname, 'dist'),
      filename: "js/[name].js"
   },
	watch: true,
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env']
				}
			},
			{
			test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/,
				loader: "file-loader",
				options: {
					name: 'img/[name].[ext]',
					publicPath: '../'
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
						{ loader: 'sass-loader',
							options: {
								outputStyle: 'expanded'
							},
						}
					]
				}),
				exclude: /node_modules/,
			},
			{
				test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]',
					publicPath: '../'
				}
		  	}
		]
	},
	plugins: [
		new ExtractTextPlugin({ filename: './css/[name].css' }),
		new CopyWebpackPlugin([
			{
				from:'src/img',
				to:'img'}
		]),
	]

};
