<template>
  <div>
    <div>
      全局组件的自定义属性值：{{ init }}
    </div>
    <button @click="countMethod">调用子组件的方法</button>
    <h5>count变红色</h5>
  </div>

</template>

<script>
export default {
  data() {
    return {
      countData: "子组件传父组件的数据"
    }
  },
  props: {
    init: {
      default: 0,
      //设置数据的类型，传入类型不符合类型就会控制台报错
      type: Number,
      //使用时，该属性是不是必选项
      required: false
    },
  },
  methods: {
    countMethod() {
      this.$emit('getChildrenData', this.countData);
    }
  }
}
</script>

<style scoped lang="less">

</style>