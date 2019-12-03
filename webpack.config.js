const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MinCssExtractPlugin = require( "mini-css-extract-plugin" );   // 将css代码提取为独立文件的插件
// const OptimizeCssAssetsWebpackPlugin = require( "optimize-css-assets-webpack-plugin" );     // css模块资源优化插件
module.exports = {
    // 入口文件
    entry: {
        pc: path.join(__dirname, "/client/pc/index.js"),
        mobile: path.join(__dirname, "/client/mobile/main.js")
    },
    //打包输出文件
    output: {
        path: path.join(__dirname, "/dist"), //打包后的文件存放的地方
        filename: "js/[name]-[hash:6].js",   //打包后输出文件的文件名
    },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader',
            // options: {
            //     loaders: {
            //         'less': [
            //             {
            //                 loader: MinCssExtractPlugin.loader,// 将处理后的CSS代码提取为独立的CSS文件
            //             },
            //             'vue-style-loader',
            //             'css-loader',
            //             'less-loader'
            //         ],
            //     }
            // }
        },
        { 
            //解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
              test: /\.css$/,
              use: [
                {
                    loader: MinCssExtractPlugin.loader,// 将处理后的CSS代码提取为独立的CSS文件
                },
                // 'vue-style-loader',
                'css-loader'
              ],
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: MinCssExtractPlugin.loader, 
                },
                // {
                //     loader:'vue-style-loader'  //vue-style-loader和 mini-css-extract-plugin 冲突，去除掉style-loader即可
                // },
                'css-loader',
                'less-loader'
            ],
        },
         {
             test: /\.js$/,
             loader: 'babel-loader',  
             exclude: /node_modules/  
         }
    ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MinCssExtractPlugin( {
            filename: "css/[name].css"
        } ),
        // pc端
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.pc.html'), // 最后生成的文件名
            template: path.resolve(__dirname, './client/pc/index.html'),  //引用的模板
            chunks: ['pc'], // 注入打包后的文件
            inject: true,
        }),
        // 移动端
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.mobile.html'),   // 最后生成的文件名
            template: path.resolve(__dirname, './client/mobile/index.html'), //引用的模板
            chunks: ['mobile'], // 注入打包后的文件
            inject: true,
        })
    ],
    // optimization: {
    //     splitChunks: {
    //      chunks: 'all'
    //     }
    // }
}
