const { merge } = require("webpack-merge");
const paths = require("./paths");
const config = require("./webpack.common");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    path: paths.output,
    publicPath: "/",
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
});
