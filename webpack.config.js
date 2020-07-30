const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "entry.js") },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "src", "index.html")
            })
    ],
    optimization: {
        splitChunks: { chunks: "all" }
    },

}