import {
  observable,
  action
} from "mobx-miniprogram";
export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  updateActiveTabBar: 0,

  // 计算属性
  get sum() {
    return this.numA + this.numB;
  },

  // actions
  updateName1: action(function (step) {
    this.numA += step

  }),
  updateName2: action(function (step) {
    this.numB += step
  }),
  updateActivetabBar: action(function (index) {
    this.updateActiveTabBar = index
  }),
});