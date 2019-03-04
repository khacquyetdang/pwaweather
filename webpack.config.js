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
    contentBase: './doc/',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['doc']),
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
      },
      {
        from: 'manifest.json',
        to: 'manifest.json'
      }
    ]),
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
    path: path.resolve(__dirname, 'doc')
  }
};