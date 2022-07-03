<template>
  <div class="left">
    <h1>{{ username }}</h1>
    <button @click="changeName">改变名字</button>
    <hr>
    <slot></slot>
    <slot name='slot2' msg213="LEFt" msg21="LEFt">这是插槽的默认内容</slot>
    <slot name='slot3'>这是插槽的默认内容</slot>
    <div class="article-containor">
      <div class="head-box">
        <slot name='head'>默认1</slot>
      </div>
      <div class="content-box">
        <slot name='content'>默认2</slot>
      </div>
      <div class="footer-box">
        <slot name='footer'>默认3</slot>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "./EventBus.js";
//默认导出
export default {
  data() {
    return {
      username: "Left",
      str: '兄弟组件的数据发送方'
    };
  },
  methods: {
    changeName() {
      this.username = "Left222";
      bus.$emit('eventBus', this.str)

    }
  }
};
</script>

<style scoped lang="less">
.left {
  flex: 1;
  background-color: pink;
}

.article-containor {
  >div {
    min-height: 150px;
  }

  .head-box {
    background-color: green;
  }

  .content-box {
    background-color: pink;
  }

  .footer-box {
    background-color: lightblue;
  }
}
</style>
