var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [path.join(__dirname, 'src', 'app.js')],
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'lib', 'js'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?stage=0'],
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};
