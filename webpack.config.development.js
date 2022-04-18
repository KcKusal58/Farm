const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        compress: true,
        historyApiFallback: true,
        https: false,
        open: true,
        hot: true,
        port: 9002,
        proxy: {
            '/api': 'http://localhost:9000'
        },
        devMiddleware: {
            writeToDisk: true,
        },
    },

    output: {
        path: path.resolve(__dirname, 'public')
    }
})