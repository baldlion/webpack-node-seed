const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const ShellPlugin = require('webpack-shell-plugin')

module.exports = {
  entry: {
      app: './src/index'
  },

  target: 'node',
  externals: [nodeExternals()],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new ShellPlugin({onBuildEnd: ['nodemon dist/app.bundle.js --watch dist']})
  ]
}
