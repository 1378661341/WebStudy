//1.导入【express】
const express = require('express')
//2.创建web服务器
const app = express()
//3.监听【8080】端口
app.listen(8080, () => {
  console.log('启动了web服务器: http://127.0.0.1:8080');
})
//4.监听客户端的get、post请求，并响应数据
app.get('/user', (req, res) => {
  res.send('监听到了get请求')
})
app.post('/user', (req, res) => {
  res.send('监听到了post请求')
})
//5.【req.query】是URL的查询参数值
app.get('/', (req, res) => {
  res.send(req.query)
})
//6.【req.params】能够匹配客户端请求【:id】位置上的值：
//例如：URL是【http://127.0.0.1:8080/123】，【req.params】= { id: 123 }
app.get('/:id', (req, res) => {
  res.send(req.params)
})