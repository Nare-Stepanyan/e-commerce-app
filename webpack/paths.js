const path = require("path");
const env = process.env.NODE_ENV || "LOCAL";

const envFiles = {
  LOCAL: ".env.local",
  PROD: "env.prod",
};

module.exports = {
  env: path.resolve(__dirname, `../env/${envFiles[env]}`),
  template: path.resolve(__dirname, "../public/index.html"),
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: path.resolve(__dirname, "../build"),
};
