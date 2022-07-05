/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:5001/'
  },
  devServer: {
    port: 5001,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        auth: 'auth@http://localhost:5050/remoteEntry.js',
        session: 'session@http://localhost:5051/remoteEntry.js',
        instructionalDesign: 'instructionalDesign@http://localhost:5053/remoteEntry.js',
        tasks: 'tasks@http://localhost:5054/remoteEntry.js'
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  devtool: 'source-map',
};
