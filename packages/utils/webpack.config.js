const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  target: 'node',
  externals: [nodeExternals()],
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
            presets: ['@babel/preset-env', {
              // targets: {
              //   esmodules: true,
              // },
            }],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   enforce: 'pre',
      //   use: ['source-map-loader'],
      // },
    ],
  },
};
