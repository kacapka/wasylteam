const path = require('path');
//const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
