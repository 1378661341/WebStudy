// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    query: {}
  },
  navigateBack() {
    wx.navigateBack()
  },
  onLoad(options) {
    console.log(options);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      query: options
    })
  }
})