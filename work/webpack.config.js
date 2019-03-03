const path = require('path');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: ['./scripts/app.js', './styles/inline.css'],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist/',
    hot: true
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WorkboxPlugin.InjectManifest({
      swSrc: './scripts/service-worker.js',
      swDest: 'service-worker.js'
    }),
    new CopyWebpackPlugin([{
      from: 'images',
      to: 'images'
    }]),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      //use: ['css-loader'],
    }, ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};