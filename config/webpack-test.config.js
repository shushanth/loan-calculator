/**
 * webpack test configuration
 */
// externalizing dependencies to improve test boot up speed
const nodeExternals = require("webpack-node-externals");
const {
  VueLoaderPlugin
} = require("vue-loader");
const {
  resolvePathDir
} = require("./helpers");

module.exports = {
  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      styles: resolvePathDir("src/assets/styles/"),
      '@/store': resolvePathDir('src/store/'),
      '@/components': resolvePathDir('src/components/'),
      '@/utils': resolvePathDir('src/utils/'),
      '@/src': resolvePathDir('src/')
    }
  },
  mode: process.env.environment || 'development',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: resolvePathDir("node_modules"),
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "usage", // "usage" | "entry" | false, defaults to false.
                  "corejs": "3.0.0",
                  "targets": {
                    "esmodules": true,
                    "ie": "11"
                  }
                }
              ]
            ]
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "inline-cheap-module-source-map",
  externals: [nodeExternals()],
  plugins: [new VueLoaderPlugin()]
};