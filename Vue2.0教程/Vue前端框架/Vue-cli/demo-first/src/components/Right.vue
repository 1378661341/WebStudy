<template>
  <div class="right">
    <h1>{{ username }}</h1>
    <button @click="changeName">改变名字</button>
    <Count @getChildrenData="getNewData"></Count>
  </div>
</template>

<script>
import bus from "./EventBus.js";
//默认导出
export default {
  name:'rrrrrr',
  data() {
    return {
      username: "Right",
      msgFormLeft: '',
    };
  },
  methods: {
    changeName() {
      console.log(this);
      this.username = "Right222";
    },
    getNewData(val) {
      this.username = val;
      console.log(this.username);
    },
  },
  created() {
    bus.$on("eventBus", val => {
      this.msgFormLeft = val;
      console.log(this.msgFormLeft, 123);
    })
  },
  activated(){
    console.log('right组件被激活');
  },
  deactivated(){
    console.log('right组件被隐藏');
  }
};
</script>

<style scoped lang="less">
.right {
  flex: 1;
  background-color: green;
}

/deep/ h5 {
  background-color: red;
}
</style>
