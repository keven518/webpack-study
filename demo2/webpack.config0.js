// resolve用来拼接绝对路径的方法
const { resolve } = require('path')
// console.log('__dirname: ', __dirname)
// console.log('resolve: ', resolve(__dirname, 'build888'))

module.exports = {
    // webpack配置
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [
            // 详细loader配置
            // 不同文件必须配置不同loader处理
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use数组中loader执行顺序：从右到左，从下到上 依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [
        // 详细plugins的配置
    ],
    // 模式
    mode: 'development',
    // mode: 'production'
}