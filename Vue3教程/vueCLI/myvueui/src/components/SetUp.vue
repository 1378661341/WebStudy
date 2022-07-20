<template>
  <button @click="showName">【setup】按钮</button>
  <button @click="changeName">【ref】按钮:{{ age }}{{ obj.type }}</button>
</template>

<script lang="ts">
import { computed, reactive, ref, watch, watchEffect, onBeforeMount, toRefs } from 'vue'
export default {
  name: 'SetUp',
  setup() {
    onBeforeMount(() => {
      console.log('linll')
    })
    const data = reactive({
      age: 10,
      obj: {
        type: '前端',
        salary: '30k'
      },
      // fullName: computed(() => {
      //   return data.obj.type + data.obj.salary
      // })
      fullName: computed({
        get() {
          return this.obj.type + this.obj.salary
        },
        set(value) {
          this.obj.type = value[0]
          this.obj.salary = value[1]
        }
      })
    })
    const name = ref('linll')

    watch(name, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, { immediate: true })

    watchEffect(() => {
      const x1 = name.value
      const x2 = data.obj.salary
      return x1 + x2
    })

    watch(() => data.age, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, { immediate: true })

    const showName = () => {
      console.log(name)
    }
    const changeName = () => {
      data.age = 900
      data.obj.type = '后端'
    }
    return {
      name,
      ...toRefs(data),
      showName,
      changeName
    }
  }
}
</script>

<style>
</style>
