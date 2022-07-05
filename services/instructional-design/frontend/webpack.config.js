/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:5004/'
  },
  devServer: {
    port: 5004,
    historyApiFallback: {
      index: '/index.html',
    }
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },          
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'instructionalDesign',
      filename: 'remoteEntry.js',
      exposes: {
        './InstructionalDesignApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
  }),
  ],
  devtool: 'source-map',
};
