const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:5052/'
  },
  devServer: {
    port: 5052,
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
      name: 'instructionaldesign',
      filename: 'remoteEntry.js',
      exposes: {
        './InstructionalDesignApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  devtool: 'source-map',
};
