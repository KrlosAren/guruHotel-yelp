const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      '@apollo/client',
      'axios',
      'graphql',
      'react-icons',
      'react-redux',
      'react-router-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
