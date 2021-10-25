const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = merge(common,{
    mode:'development',
    devtool:'eval-cheap-module-source-map',
    devServer:{
        hot: true,
        port:8090,
        open:true,
        proxy:{
        // 配置代理
        // '/baas-openlab': {
        //     target: 'http://baas.uban360.net:21006/',
        //     changeOrigin: true,
        // }
    },
},
    plugins:[
        new ReactRefreshWebpackPlugin()
    ]
})