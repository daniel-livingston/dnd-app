const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
	return {
		mode: "development",
		entry: {
			index: { import: "./src/index.js", dependOn: "fabric" },
			fabric: "fabric",
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].bundle.js",
		},
		plugins: [new MiniCssExtractPlugin()],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ["babel-loader"],
				},
				{
					test: /\.s?css$/,
					use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				},
			],
		},
		devtool: "inline-source-map",
	};
};
