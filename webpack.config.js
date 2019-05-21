let path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        main: "./app/js/main.js"
    },
    mode: 'development',
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        //开启gzip压缩
        compress: true,
        port: 8081
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: "html-loader"
        }, {
            test: /\.vue$/,
            use: "vue-loader",
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader", {
                    loader: 'px2rem-loader',
                    // options here
                    options: {
                        remUni: 75,
                        remPrecision: 8
                    }
                }
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '测试页面',
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })

    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}


// module.exports = env => {
//     console.log(env);
//     //console.log("参数", env.production);
// }