const path = require("path");

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
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/", // publicPath를 기본 도메인으로 설정을 한다. cdn주소를 쓴다면 여기다쓰자
    // chunkFilename: "[name].js",
  },
};
