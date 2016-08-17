/**
 * @file The webpack config js file for the release
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
module.exports = {  
    entry: {
//        'Calculator': './src/Calculator.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin([ path.resolve(__dirname, './dist') ])
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './tests')
            ],
            exclude: [
                path.resolve(__dirname, './node_modules')
            ],
            loader: 'ts-loader'
        }, {
            test: /\.html$/,
            include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './tests')
            ],
            exclude: [
                path.resolve(__dirname, './node_modules')
            ],
            loader: 'html'
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './tests')
            ],
            exclude: [
                path.resolve(__dirname, './node_modules')
            ],
            loaders: ['style', 'css', 'sass', 'postcss']
        }]
    },
    postcss: function (webpack) {
        return [
            autoprefixer,
            precss,
            postcssImport({
                addDependencyTo: webpack
            })
        ];
    }
}
