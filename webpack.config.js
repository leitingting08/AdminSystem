const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
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
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
        contentBase: './build', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //设置为true，当源文件改变时会自动刷新页面
        port: 8080, //设置默认监听端口，如果省略，默认为"8080"
    }
}