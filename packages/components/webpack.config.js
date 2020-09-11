const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  devtool: 'cheap-module-eval-source-map',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'components',
    libraryTarget: 'umd',
    // library: '@rauleite/components',
    // libraryTarget: 'commonjs2',
  },
  watchOptions: {
    // ignored: ['node_modules/**', './dist/**'],
    ignored: ['node_modules/**'],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
};
