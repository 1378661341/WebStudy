const fs = require('fs')
fs.readFile(__dirname + '/1111.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败：' + err.message);
  }
  console.log('读取文件成功：' + dataStr);
})

fs.writeFile(__dirname + '/111991.txt', '写入文件内容123', 'utf8', function (err) {
  if (err) {
    return console.log('写入文件失败：' + err.message);
  }
  console.log('写入文件成功');
})
//3.获取当前文件夹的路径
console.log('当前文件的路径：', __dirname);
//4.拼接路径
const path = require('path')
const pathStr = path.join(__dirname, './files/1.txt')
console.log('拼接路径：' + pathStr);
//5.截取文件名
const fileName = path.basename(pathStr, '.txt')
console.log('文件名：' + fileName);
//6.获取后缀名
const extName = path.extname(pathStr)
console.log("后缀名:" + extName);
//7.【http】模块创建服务器
const http = require('http')





