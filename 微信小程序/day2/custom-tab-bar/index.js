// custom-tab-bar/index.js
//1.引入【mobx-miniprogram-bindings】
import {
  storeBindingsBehavior
} from "mobx-miniprogram-bindings";
//2.引入【store】
import {
  store
} from "../store/store";
Component({
  options: {
    styleIsolation: 'shared',
  },
  //3.通过【behaviors】节点自动绑定【storeBindingsBehavior】
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    //4.【store】实例
    store,
    //5.数据源
    fields: {
      sum: "sum",
      updateActiveTabBar: "updateActiveTabBar"
    },
    //6.修改数据源的方法
    actions: {
      updateActivetabBar: "updateActivetabBar"
    },
  },
  observers: {
    "sum": function (val) {
      this.setData({
        'list[2].info': val
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{
        "pagePath": "/pages/index/index",
        "text": "首页1",
        "iconPath": "/images/home.png",
        "selectedIconPath": "/images/home-active.png"
      },
      {
        "pagePath": "/pages/home/home",
        "text": "首页2",
        "iconPath": "/images/home.png",
        "selectedIconPath": "/images/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/message.png",
        "selectedIconPath": "/images/message-active.png",
        "info": 3
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/contact.png",
        "selectedIconPath": "/images/contact-active.png"
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateActivetabBar(event.detail);
      wx.switchTab({
        url: this.data.list[event.detail].pagePath
      })
      // wx.switchTab = ({
      //   url: 
      // })
    },
  }
})