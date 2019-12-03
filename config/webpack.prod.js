const merge = require('webpack-merge');
const common = require('../webpack.config.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(),  // 所要清理的文件夹名称
    ]
})