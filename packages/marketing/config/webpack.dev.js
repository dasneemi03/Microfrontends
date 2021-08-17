const { merge } = require('webpack-merge');
//merge() is used t0 merge together 2 different web config objects.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig =  require('./webpack.common');
const ModuleFederationPlugin =  require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer:{
        port:3001,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/boostrap',
            },
            shared: packageJson.dependencies,

        }),
    ]
}

module.exports = merge(commonConfig, devConfig);