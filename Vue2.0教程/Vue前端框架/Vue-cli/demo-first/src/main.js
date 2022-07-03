import Vue from 'vue'
import App from './App.vue'
import Count from '@/components/Count.vue'

Vue.config.productionTip = false

Vue.component('Count',Count)
new Vue({
  render: h => h(App),
}).$mount('#app')
