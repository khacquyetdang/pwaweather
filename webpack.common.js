const path = require('path');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var basePath = process.env.NODE_ENV === 'dev' ? '' : '/pwaweather/';
module.exports = {
  entry: ['./scripts/app.js', './styles/inline.css'],
  devtool: 'source-map',
  devServer: {
    contentBase: './docs/',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
      template: 'index.html',
      templateParameters: {
        basePath: basePath,
      }
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
      },
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: basePath
  }
};