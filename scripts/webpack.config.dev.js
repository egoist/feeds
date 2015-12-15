var webpack = require('webpack')
var config = require('./webpack.config')
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
var path = require('path')

config.debug = true
config.devtool = 'cheap-module-eval-source-map'
config.entry.push('webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr')
config.output.publicPath = 'http://localhost:3076/build/'
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': JSON.stringify('development')
  })
]
config.target = webpackTargetElectronRenderer(config)

module.exports = config
