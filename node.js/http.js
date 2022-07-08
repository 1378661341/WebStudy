//1.引入http模块
const http = require('http');
//2.创建服务器
const server = http.createServer()
//3.监听客户端的请求事件
server.on('request', (req, res) => {
  //【req.url】就是请求的文件路径
  const url = req.url
  //【req.method】就是请求方式get/post
  const method = req.method
  str = `req.url:${url},req.methods:${method}`
  console.log(str);
  //解决返回数据客户端中文乱码问题
  res.setHeader("Content-Type", 'text/html; charset=utf-8')
  //【res.end】能够返回客户端数据
  res.end('解决中文乱码：' + str)
})
//4.启动服务器
server.listen(8080, () => {
  console.log('服务器已经启动:http://127.0.0.1:8080');
})
console.log(module);
////2.获取模块的向外共享成员
const userName = require('./module.js')
console.log('获取模块的向外共享成员:', userName);