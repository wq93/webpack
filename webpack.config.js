const Webpack = require('webpack');
const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
// const buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  //入口文件的配置项
  entry: {
    //里面的entery是可以随便写的
    entry: './src/entry.js'
  },
  //出口文件的配置项
  output: {
    //打包的路径文职
    path: path.resolve(__dirname, 'dist'),
    //打包的文件名称
    filename: 'bundle.js'
  },
  //模块：例如解读CSS,图片如何转换，压缩
  module: {},
  //插件，用于生产模版和各项功能
  plugins: [],
  //配置webpack开发服务功能
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: 1717
  }
}