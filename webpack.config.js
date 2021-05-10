/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const S3Plugin = require("webpack-s3-plugin");
const { version } = require("./package.json");

dotenv.config();
module.exports = function (env, { mode }) {
  const plugins = [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ];
  const versionEncode = encodeURIComponent(version);

  const publicPath =
    mode === "production" ? `https://static-yapp-helper.s3.ap-northeast-2.amazonaws.com/dist/${versionEncode}/` : "/";

  const directoryPath =
    mode === "production" ? path.resolve(__dirname, `dist/${versionEncode}`) : path.resolve(__dirname, "public");

  if (mode === "production") {
    plugins.push(
      new S3Plugin({
        s3Options: {
          accessKeyId: process.env.STORAGE_ID,
          secretAccessKey: process.env.STORAGE_SECRETS,
          region: "ap-northeast-2",
        },
        s3UploadOptions: {
          Bucket: "static-yapp-helper",
          acl: "public-read",
        },
        directory: `./dist/${versionEncode}`,
      })
    );
  }
  return {
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
        "@font": path.resolve(__dirname, "src/component/atomic/FontStyle"),
        "@molecules": path.resolve(__dirname, "src/component/molecules"),
        "@cmodel": path.resolve(__dirname, "src/model"),
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
          exclude: ["/node_modules"],
        },
        {
          test: /\.ts(x?)$/,
          use: ["babel-loader", "ts-loader"],
          exclude: ["/node_modules", "/index.ts"],
        },
        {
          test: /.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    output: {
      filename: "index.js",
      path: directoryPath,
      publicPath, // publicPath를 기본 도메인으로 설정을 한다. cdn주소를 쓴다면 여기다쓰자
      // chunkFilename: "[name].js",
    },
    plugins,
  };
};
