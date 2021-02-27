const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: ["@babel/polyfill", "./src/index.tsx"],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    alias: {
      atomic: path.resolve(__dirname, "src/component/atomic"),
      molecules: path.resolve(__dirname, "src/component/molecules"),
      organisms: path.resolve(__dirname, "src/component/organisms"),
      template: path.resolve(__dirname, "src/component/template"),
      hooks: path.resolve(__dirname, "src/hooks"),
      actions: path.resolve(__dirname, "src/store/action"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
    },
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
    // publicPath: "/dist/", // publicPath를 기본 도메인으로 설정을 한다. cdn주소를 쓴다면 여기다쓰자
    // chunkFilename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
