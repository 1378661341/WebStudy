// app.js
import {
  promisifyAll
} from 'miniprogram-api-promise';
//之后就能用【wx.p】来实现需要的功能
const wxp = wx.p = {}
//利用【promisifyAll】对象实现把【wx】微信对象转化成【wxp】对象
promisifyAll(wx, wxp)
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})