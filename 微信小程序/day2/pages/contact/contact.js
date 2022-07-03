// pages/contact/contact.js
//1.引入【mobx-miniprogram-bindings】
import {
  createStoreBindings
} from "mobx-miniprogram-bindings";
//2.引入【store】
import {
  store
} from "../../store/store";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //3.绑定【store】在该页面上的【this.storeBindings】
    this.storeBindings = createStoreBindings(this, {
      //4.【store】实例
      store,
      //5.数据源
      fields: ["numA", "numB", "sum"],
      //6.修改数据源的方法
      actions: ["updateName1", "updateName2"],
    });
  },
  btnHandler1(e) {
    this.updateName1(e.target.dataset.step)
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
    //7.清理【store】的绑定
    this.storeBindings.destroyStoreBindings();
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