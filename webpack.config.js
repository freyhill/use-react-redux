const HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");

module.exports = (env, argv) => ({
	entry:"./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "boundle.js"
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			}]
	},
	devServer: {
		port: 3100,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title:"redux",
			filename: "index.html",
			template: "src/tpl.html"
		})
	]
});
