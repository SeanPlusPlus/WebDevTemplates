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
              loader: ‘babel’,
              query: {
                  // https://github.com/babel/babel-loader#options
                  cacheDirectory: true,
                  presets: ['es2015', 'stage-2']
              }
          }
      ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};
