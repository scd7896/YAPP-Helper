const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = function (env, { mode }) {
  return {
    entry: "./index.ts",
    mode: "production",
    target: "node",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["ts-loader"],
        },
      ],
    },
    externals: [nodeExternals()],
  };
};
