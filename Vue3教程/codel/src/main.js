import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import router from './router/index'
const app = createApp(App)
axios.defaults.baseURL = 'http://api.com'
app.config.globalProperties.$http = axios
// app.directive('focus', {
//   mounted (el) {
//     el.focus()
//   },
//   updated (el) {
//     el.focus()
//   }
// })
app.directive('focus', (el) => {
  el.focus()
})
app.component('HelloWorld', HelloWorld)
app.use(router)
app.mount('#app')
