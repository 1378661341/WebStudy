<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 【ref】 -->
    <Demo1 ref="Demo1"></Demo1>
    <!-- 【父子组件的数据交互】 -->
    <div class="leftRight">
      <Left></Left>
      <Right></Right>
    </div>
    <div>
      <Count :init="9" @getChildrenData="getNewData"></Count>
      <button @click="getRef">获取子组件的ref</button>
    </div>
    <!-- 【this.$nextTick】 -->
    <div>
      <input type="text" v-if="inputVisible" @blur="showButton" ref="fcousInput">
      <button v-else @click="showInput">显示输入框</button>
    </div>
    <!-- 【keep-alive】 -->
    <div>
      <button @click="componentNamne = 'Left'">切换到左组件</button>
      <button @click="componentNamne = 'Right'">切换到右组件</button>
      <keep-alive include="rrrrrr,Left">
        <component :is="componentNamne"></component>
      </keep-alive>
    </div>
    <!-- 【插槽】 -->
    <div>
      <Left>
        <p>
          left组件的【defualt】插槽内容
        </p>
        <template #slot2="obj">
          <p>
            left组件的【slot2】指定插槽内容,接受到的数据是：{{obj,obj.msg}}
          </p>
        </template>
        <template #head>
          <p>
            left组件的【head】指定插槽内容
          </p>
        </template>
        <template #content>
          <p>
            left组件的【content】指定插槽内容
          </p>
        </template>
        <template #footer>
          <p>
            left组件的【footer】指定插槽内容
          </p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Demo1 from "./components/Demo1";
import Left from "@/components/Left.vue";
import Right from "@/components/Right";
import Count from "./components/Count";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      getData: '',
      inputVisible: false,
      componentNamne: 'Left'
    }
  },
  components: {
    HelloWorld,
    Demo1,
    Left,
    Right,
    Count
  },
  methods: {
    getNewData(val) {
      this.getData = val;
      console.log(this.getData);
    },
    getRef() {
      this.$refs.Demo1.changeName();
      this.$refs.Demo1.username = 'Demo1+APP';
    },
    showInput() {
      this.inputVisible = true;
      //在inout标签渲染后进行设置焦点
      this.$nextTick(() => {
        this.$refs.fcousInput.focus()
      })
    },
    showButton() {
      this.inputVisible = false;
    }
  }
};
</script>

<style scoped lang="less">
.leftRight {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
