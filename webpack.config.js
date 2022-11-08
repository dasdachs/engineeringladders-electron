/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: production ? "production" : "development",
  entry: "./src/index.tsx",
  target: "web",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", "jsx" ],
  },
  devtool: production ? "source-map" : "inline-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
          },

        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, "public"),
    allowedHosts: [ "*" ],
    port: 4000,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true,
      filename: "index.html",
    })
  ],
};