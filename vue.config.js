const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "fs": false,
        "util": require.resolve("util/"),
        "assert": require.resolve("assert/"),
        "stream": require.resolve("stream-browserify"),
        "constants": require.resolve("constants-browserify"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "querystring": require.resolve("querystring-es3")
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ]
  }
});
