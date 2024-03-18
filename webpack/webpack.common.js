const HTMLWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");
const dotenv = require("dotenv").config({ path: paths.env });
const webpack = require("webpack");

const LOADERS = [
  {
    test: /\.(ts|tsx)$/,
    exclude: "/node_modules/",
    use: "babel-loader",
  },
  {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/",
        },
      },
    ],
  },
];
const PLUGINS = [
  new HTMLWebpackPlugin({
    template: paths.template,
    filename: "index.html",
  }),
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(dotenv.parsed),
  }),
];

module.exports = {
  entry: paths.entry,
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: LOADERS,
  },
  plugins: PLUGINS,
};
