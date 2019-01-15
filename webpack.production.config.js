const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, 'src/main.jsx'),
        vendor: ['react', 'react-dom', 'react-router', 'classnames']
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'js/[name].[hash:8].js'
    },
    devtool:'source-map',
    resolve:{ // 可以省略后缀名
        extensions:['.js', '.jsx', '.less']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            {
              test: /\.less$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader']
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[hash:8].[ext]' },
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[hash:8].[ext]'}
        ]
    },
    optimization: {
        runtimeChunk: {
          name: 'manifest'
        },
        minimize: true, // [new UglifyJsPlugin({...})]
        splitChunks:{
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: false,
          cacheGroups: {
            vendor: {
              name: 'vendor',
              chunks: 'initial',
              priority: -10,
              reuseExistingChunk: false,
              test: /node_modules\/(.*)\.js/
            },
            styles: {
              name: 'styles',
              test: /\.(less|css)$/,
              chunks: 'all',
              minChunks: 1,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
    },
    plugins: [
        new CopyWebpackPlugin([ // 复制插件
          { from: path.join(__dirname,'iconfont'), to:  path.join(__dirname,'dist/iconfont/') }
        ]),

        new HtmlWebpackPlugin({
          template: __dirname + '/public/index.html',
          filename: "./index.html"
        }),

        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css',
          allChunks: true,
        }),
        new CleanWebpackPlugin(['dist']),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 定义为生产环境，编译React时压缩到最小
        new webpack.DefinePlugin({
         'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: false // 不是开发环境
        })
    ]
}
