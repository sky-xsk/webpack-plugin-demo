const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
  },
  devtool: 'inline-source-map',
  // webpack-dev-server 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xsk-test Development',
    }),
  ],
  output: {
    // filename: '[name].bundle.js',
    filename: '[name].[contenthash].js', // hash值
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清空dist文件夹,
    publicPath: '/',
  },
  // optimization: {
  //   // runtimeChunk: 'single',
  //   // SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
}
