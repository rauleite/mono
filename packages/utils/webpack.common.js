// /* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'utils',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
    // globalObject: `(typeof self !== 'undefined' ? self : this)`
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
