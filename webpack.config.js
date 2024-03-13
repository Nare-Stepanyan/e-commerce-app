const HTMLWebpackPlugin = require("html-webpack-plugin");

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
          outputPath: "images/", // Define output path for the images
        },
      },
    ],
  },
];
const PLUGINS = [
  new HTMLWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
  }),
];

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: LOADERS,
  },
  plugins: PLUGINS,
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
};
