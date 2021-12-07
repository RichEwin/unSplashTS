require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // bundling mode (other: production)
  entry: './src/index.tsx', // direct webpack to enter through here
  output: { // output a bundle.js file in the public dir
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: { // array of extensions used to resolve modules
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: { // loader configuration rules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_UNSPLASH_KEY': JSON.stringify(process.env.REACT_APP_UNSPLASH_KEY),
    })],
};
