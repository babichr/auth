import path from "path";
import webpack from "webpack";


export const webpackConfig = {
	entry: ['./src/index.js', 'webpack-hot-middleware/client?reload=true'],
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, "dist"),
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 3000,
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
                presets: ['es2015', 'react', "stage-2"]
            }
		},
		{
			test: /\.css$/,
			exclude: /(node_modules|bower_components)/,
			loader: "style-loader!css-loader"
		},
		{
			test: /\.styl$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'style-loader!css-loader!stylus-loader',
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],

	devServer: {
		// contentBase: path.join(__dirname, "/dist"),
		hot: true
	},
	

}