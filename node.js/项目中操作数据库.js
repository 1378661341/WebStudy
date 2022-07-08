//1.导入【mtsql】模块
const mysql = require('mysql')
//2.和数据库建立连接
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})
//3.测试连接数据库的逻辑：【select 1】意思无意义就是返回【1】
// db.query('select 1', (err, res) => {
//   //错误的场合
//   if (err) return console.log(err.message);
//   //成功的场合，输出：【[ RowDataPacket { '1': 1 } ]】
//   console.log(res);

// })
//4.查询【user】表的数据
db.query('select * from user', (err, res) => {
  //错误的场合
  if (err) return console.log(err.message);
  //成功的场合
  console.log(res);

})

//5.插入【user】表的数据
// const user = { username: 'sper-man1', password: 'pcc312' };
// const sql = 'insert into user (username,password) values (?,?)'
// //【??】代表列值的占位符
// db.query(sql, [user.username, user.password], (err, res) => {
//   //错误的场合
//   if (err) return console.log(err.message);
//   //成功的场合,【插入】语句的时候会包含【res.affectedRows】的属性，能够判断是否成功
//   if (res.affectedRows === 1) return console.log('插入成功', res);
// })

//6.插入【user】表的数据(便捷写法)
// const user = { username: 'sper-man10', password: 'pcc10' };
// const sql = 'insert into user set ?'
// //【??】代表列值的占位符
// db.query(sql, user, (err, res) => {
//   //错误的场合
//   if (err) return console.log(err.message);
//   //成功的场合,【插入】语句的时候会包含【res.affectedRows】的属性，能够判断是否成功
//   if (res.affectedRows === 1) return console.log('插入成功', res);
// })

//7.更新【user】表的数据(便捷写法)
// const user = { id:'26',username: 'sper-man26', password: 'pcc26' };
// const sql = 'update user set ? where id=?'
// db.query(sql, [user,user.id], (err, res) => {
//   //错误的场合
//   if (err) return console.log(err.message);
//   //成功的场合,【更新】语句的时候也会包含【res.affectedRows】的属性，能够判断是否成功
//   if (res.affectedRows === 1) return console.log('更新成功', res);
// })

//8.删除【user】表的数据
const sql = 'delete from user where id = ?'
db.query(sql, 26, (err, res) => {
  //错误的场合
  if (err) return console.log(err.message);
  //成功的场合,【删除】语句的时候也会包含【res.affectedRows】的属性，能够判断是否成功
  if (res.affectedRows === 1) return console.log('删除成功', res);
})
