<template>
  <button @click="showName">按钮</button>
  <teleport to="app">
    <div>孙组件传送到祖宗组件上进行定位</div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { hunhe } from '../mixin/mixin'
export default defineComponent({
  props: ['msg'],
  data() {
    return {
      name: 'linll'
    }
  }
  // mixins: [hunhe]
})
</script>

<style>
</style>
