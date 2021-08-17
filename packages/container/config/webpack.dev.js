const { merge } = require('webpack-merge');
//merge() is used t0 merge together 2 different web config objects.
const commonConfig =  require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer:{
        port:3000,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing: 'marketing@http://localhost:3001/remoteEntry.js',
            },
            shared:packageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);