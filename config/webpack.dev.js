const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      publicPath:'/',
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },

    },
    watch: true,
    devServer: {
        port: 2000,
        hot: true,
        open: true,
        historyApiFallback: true,
        proxy: {
           '/movies': 'http://reactjs-cdp.herokuapp.com',
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});