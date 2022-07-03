<template>
  <div class="demo1" ref='domName'>
    <h1>{{ username }}</h1>
    <h2>{{ username + 3 }}</h2>
    <h3>{{ username + 2 }}</h3>
    <button @click="changeName">改变名字</button>
  </div>
</template>

<script>
//默认导出
export default {
  data() {
    return {
      username: "Demo1"
    };
  },
  methods: {
    changeName() {
      //console.log(this);
      this.$refs.domName.style.color = 'red';
      this.username = "Demo222";
    },
    initBooklist() {
      console.log("发请求");
    },
  },
  beforeCreate() {
    console.log("初始化数据源之前");
  },
  created() {
    console.log("经常在这个阶段获取数据和更新数据源");
    this.initBooklist();
  },
  beforeMount() {
    console.log("内存DOM挂载到浏览器之前");
  },
  mounted() {
    console.log("内存DOM挂载到浏览器之后", this.$el);
  },
  beforeUpdate() {
    console.log("渲染显示数据之前");
  },
  updated() {
    console.log("更新显示数据之后");
  },
  beforeDestroy() {
    console.log("组件销毁之前");
  },
  destroyed() {
    console.log("组件销毁之后");
  }
}
</script>

<style scoped lang="less">
.demo1 {
  background-color: pink;
}
</style>
