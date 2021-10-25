const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common,{
    mode:'production',
    output: {
        filename: '[name].[chunkhash:5].js',
        chunkFilename: '[name].[chunkhash:5].js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
        moduleIds: 'deterministic',
        splitChunks: {
            minSize: 50 * 1024,
            maxSize: 1024 * 1024,
            cacheGroups: {
              npm: {
                name: 'modules',
                test: /[/\\]node_modules[/\\]/,
                priority: 5,
                chunks: 'initial',
              },
            },
          },
      },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ]
})