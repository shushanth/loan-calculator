'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');
const {
  HotModuleReplacementPlugin
} = require('webpack');
const {
  DEV_PORT,
  resolvePathDir
} = require('./helpers');

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolvePathDir('dist'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      styles: resolvePathDir('src/assets/styles/'),
      '@/store': resolvePathDir('src/store/'),
      '@/components': resolvePathDir('src/components/'),
      '@/utils': resolvePathDir('src/utils/'),
    },
  },
  devServer: {
    port: DEV_PORT,
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    contentBase: resolvePathDir('dist'),
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: resolvePathDir('node_modules'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ],
          },
        }, ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'loan calculator',
      template: resolvePathDir('./src/index.html'),
    }),
  ],
};