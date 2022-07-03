// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'hello world',
    imagePath: '/images/logo.jpg',
    // 生成随机数在10以内
    randomNum: Math.random() * 10,
    // 生成随机数保留两位小数
    randomNum2: Math.random().toFixed(2),
    count: 0,
    msg: '输入框默认值',
    type: 3,
    flag: true,
    array: [{
      id: 1,
      name: '【项目1】'
    }, {
      id: 2,
      name: '【项目2】'
    }, {
      id: 3,
      name: '【项目3】'
    }]
  },
  gotoMessage() {
    wx.switchTab({
      url: '/pages/message/message',
      // success: (res) => {},
      // fail: (res) => {},
      // complete: (res) => {},
    })
  },
  gotoLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs?name=ls&gender=男',
      // events: events,
      // success: (result) => {},
      // fail: (res) => {},
      // complete: (res) => {},
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 定义触摸事件
  bindtapHandler(e) {
    console.log(e);
  },
  // 定义修改数据事件
  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },
  // 获取事件输入参数
  btnHandler(e) {
    //获取参数对象结果：【{info:"事件传入参数：2"}】
    console.log(e.target.dataset);
    //参数值的结果：【事件传入参数：2】
    console.log(e.target.dataset.info);
    // this.setData({
    //   count: this.data.count + e.target.dataset.info
    // })
  },
  //定义输入事件
  inputHandler(e) {
    console.log(e.detail.value);
    this.setData({
      //【e.detail.value】获取输入值
      msg: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})