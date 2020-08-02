const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 设置nodejs 环境变量
// process.env.NODE_ENV = 'development'

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader 的配置
            {
                // 处理less资源
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-preset-env')
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // plugins的配置
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    // 模式
    mode: 'development', // 开发模式
    // mode: 'production'
  
    // 开发服务器 devServer： 用来自动化(自动编译，自动打开浏览器，自动刷新浏览器~~)
    devServer: {
      contentBase: resolve(__dirname, 'build'),
      // 启动gzip压缩
      compress: true,
      // 端口号
      port: 3000,
      open: true
    }
};
