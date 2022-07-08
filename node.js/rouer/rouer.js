//1.引入模块
const express = require('express')
//2.利用路由方法
var router = express.Router()
const mw1 = (req, res, next) => {
  console.log('定义局部中间件1');
  next()
}
const mw2 = (req, res, next) => {
  console.log('定义局部中间件2');
  next()
}
// router.get('/user', mw1, mw2, (req, res) => {
//   console.log('get请求:/user');
//   res.send('get请求')
// })
router.get('/user', [mw1, mw2], (req, res) => {
  console.log('get请求:/user');
  res.send('get请求')
})

//3.挂载路由
router.get('/', (req, res) => {
  console.log('get请求:/');
  res.send('get请求')
})

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})
//4.暴露路由模块
module.exports = router