"use strict";

const path = require('path');
const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
    return {
        entry: env.dev ? './src/_dev/index.ts' : './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.(ts)$/,
                    use: [{
                        loader: 'awesome-typescript-loader',
                        options: {silent: true}
                    }],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['*', '.ts', '.js']
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'index.js',
            library: 'PersianInfo',
            libraryTarget: "umd"
        },
        devServer: {
            contentBase: './src/_dev',
            hot: true
        },
        plugins: [env.dev ? new Webpack.HotModuleReplacementPlugin() : new UglifyJsPlugin()]
    };

};