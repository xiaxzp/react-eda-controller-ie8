const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        //inline:true,//ie8關閉
        host: '192.168.16.112',
    }
};

module.exports = merge(commonConfig, devConfig);