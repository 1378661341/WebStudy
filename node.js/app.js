const express = require('express')
const app = express()

//1.解析post请求中的【json】格式请求体数据
app.use(express.json())
//2.解析post请求中的【URL-encoded】格式请求体数据
app.use(express.urlencoded({ extended: false }))

//3.定义并且注册了一个中间件
app.use((req, res, next) => {
  console.log('定义并且注册了一个中间件');
  next()
})
//1.导入路由模块
const userRouter = require('./rouer/rouer.js')
//2.注册路由模块，并且添加了一个前缀【/api】
app.use('/api', userRouter)

app.listen(8080, () => {
  console.log('启动了web服务器: http://127.0.0.1:8080');
})



