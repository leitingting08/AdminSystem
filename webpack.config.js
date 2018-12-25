const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash:8].js',
    publicPath: './',
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader'
            }
        },
        {
            test: /\.(css|less)$/,
            loader: ["style-loader", "css-loader", "less-loader"]
        },
    ],
  },
  plugins: [new HtmlWebpackPlugin()]
}