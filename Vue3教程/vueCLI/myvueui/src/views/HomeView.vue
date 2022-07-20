<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <SetUp></SetUp>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import SetUp from '@/components/SetUp.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    SetUp
  },
  beforeRouteEnter(to, from, next) {
    console.log('通过路由规则进入的情况下，该函数被调用')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('通过路由规则离开的情况下，该函数被调用')
    next()
  }
})
</script>
