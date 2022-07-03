// components/test1/test1.js
const myBehavior = require("../../behaviors/my-behavior")
//1.引入【mobx-miniprogram-bindings】
import {
  storeBindingsBehavior
} from "mobx-miniprogram-bindings";
//2.引入【store】
import {
  store
} from "../../store/store";
Component({
  behaviors: [myBehavior, storeBindingsBehavior],
  storeBindings: {
    //4.【store】实例
    store,
    //5.数据源
    fields: {
      numA: () => store.numA,
      numB: (store) => store.numB,
      sum: "sum",
    },
    //6.修改数据源的方法
    actions: {
      updateName2: "updateName2",
    },
  },
  lifetimes: {
    created() {
      console.log('created');
    },
    attached() {
      console.log('attached');
    },
    detached() {
      console.log('detached');
    }
  },
  pageLifetimes: {
    show() {
      console.log('show');
    },
    hide() {
      console.log('hide');
    },
    resize(size) {
      console.log('resize:', size);
    }
  },
  options: {
    pureDataPattern: /^_/,
    //开启多个插槽
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    childCount: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _n1: 0,
    _n2: 0,
    sum: 0
  },
  observers: {
    '_n1, _n2': function (newN1, newN2) {
      this.setData({
        sum: newN1 + newN2
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addN1() {
      this.setData({
        _n1: this.data._n1 + 1
      });
    },
    addN2() {
      this.setData({
        _n2: this.data._n2 + 1
      });
    },
    addChildCount() {
      this.setData({
        childCount: this.properties.childCount + 1
      });
      this.triggerEvent("viewCount", {
        value: 666
      });
    },
    btnHandler2(e) {
      this.updateName2(e.target.dataset.step)
    }
  }
})