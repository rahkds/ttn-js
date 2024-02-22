const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require('webpack');


module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js", 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: "./public/index.html", 
      templateParameters: {
        PUBLIC_URL : ''
      },
    }),

  ],
  devServer: {
    port: 3000, 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};