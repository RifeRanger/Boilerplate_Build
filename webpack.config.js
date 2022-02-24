const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/client/main.js',
  output: {
    path: path(__dirname, 'public'),
    filename: '/public/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path(__dirname, './client'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
};