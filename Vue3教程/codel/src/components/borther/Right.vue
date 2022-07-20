<template>

</template>

<script>
import { computed } from '@vue/runtime-core'
import bus from './eventBus'
export default {
  name: MyRight,
  data() {
    return {
      count: 0,
      color: '#0000'
    }
  },
  provide() {
    return {
      color: computed(() => this.color)
    }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      },
      updated(el) {
        el.focus()
      }
    }
  },
  methods: {
    addCount() {
      this.count++
      bus.emit('countChange', this.count)
    }
  }
}
</script>

<style>
</style>