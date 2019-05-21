let path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./js/main.js"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        //开启gzip压缩
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {test: /\.html$/, use: "html-loader"},
            {test: /\.vue$/, use: "vue-loader"},
            {
                test: /\.scss$/, use:
                    [
                        {loader: "sass-loader"},
                        {loader: "css-loader"},
                        {loader: "style-loader"}
                    ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
}