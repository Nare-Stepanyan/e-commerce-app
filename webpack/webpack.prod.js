const { merge } = require("webpack-merge");
const paths = require("./paths");
const config = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const MINIMIZER = [
  "...",
  new TerserPlugin({
    parallel: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false,
      },
    },
  }),
  new CssMinimizerPlugin({
    minimizerOptions: {
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
        },
      ],
    },
  }),
];

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: paths.output,
    publicPath: "/",
  },
  optimization: {
    minimize: true,
    minimizer: MINIMIZER,
  },
});
