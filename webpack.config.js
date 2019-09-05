const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.jsx'),
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: { // 可以省略后缀名
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            '@': path.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: 'style-resources-loader',
                    options: {
                        sourceMap: true,
                        patterns: [
                            path.resolve(__dirname, 'src/less/variable.less'),
                        ]
                    }
                }
              ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000'
            }, // 限制大小5kb
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000'
            }, // 限制大小小于5k
        ]
    },
    plugins: [
        // new webpack.BannerPlugin("Copyright by ltt")
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    devServer: {
        inline: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
}