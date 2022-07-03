const path = require("path");//导入node.js提供的模块，功能是专门是操作路径的。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require("path");
const htmlPlugin = new HtmlWebpackPlugin({
  //打包和调试时复制的文件
  template:'./src/index.html',
  //调试时内存中复制该文件的存放路径
  filename:'./index.html'
})
module.exports = {
  mode: "development",
  devtool:'eval-source-map',
  entry: path.join(__dirname, "./src/index.js"),//输入文件,__dirname代表获取当前目录
  output: {
    path: path.join(__dirname, "./dist"),//输出的路径
    filename: "js/bundle.js",//输出文件名，默认是main.js
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),// 这里指定需要打开index.html的位置
    },
    port: 8080, // 指定端口s
    compress: true, //压缩
    open: true,//自动打开浏览器 url 地址
    hot: true,//热重载，热更新
  },
  plugins: [
    htmlPlugin,
    new CleanWebpackPlugin(),

  ],
  module: {
    rules: [
      //test：代表匹配。 /.../:代表正则表达式。 \. :代表吧点号给转义。 $: 代表以什么结尾。
      //'style-loader':将模块导出的内容作为样式并添加到DOM中
      //'css-loader':加载并解析CSS文件，最终返回CSS代码
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.jpg|png|gif$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024 //大于40000000kb不转base64
          }
        }
      },
      {
        test: /\.js$/,
        //exclude：代表排除【node_modules】文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [["@babel/plugin-proposal-decorators", { "legacy": true}]]
          }
        }
      }
    ]
  },
  resolve:{
    alias:{
      '@':path.join(__dirname,'./src/')
    }
  }
}