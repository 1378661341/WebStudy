// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 123
  },
  homeCount(e) {
    this.setData({
      count: e.detail.value
    })
  },
  getMytest1() {
    console.log(this.selectComponent(".my-test1"));
    console.log(this.selectComponent(".my-test1").data.sum);
    console.log(this.selectComponent(".my-test1").addN1());

  },
  // 1.发起【get】数据请求
  getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: '20'
      },
      success: (res) => {
        console.log(res);
      }
    })
  },
  // 2.发起【post】数据请求
  postInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/post', //必须是【https】协议
      method: 'POST', //请求方式是【get】
      data: { //请求体参数
        name: 'ls',
        gender: '男'
      },
      success: (res) => { //成功后的回调函数
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.postInfo();
    this.getInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})