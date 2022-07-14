<template>
<h5>{{color.value}}</h5>
</template>

<script>
import bus from './eventBus'
export default {
  name: MyLeft,
  data() {
    return {
      count: 0
    }
  },
  inject: ["color"],
  created() {
    bus.on('countChange', count => {
      this.count = count
    })
  }
}
</script>

<style>
</style>