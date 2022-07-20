import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins/plugin'
const app = createApp(App)
app.use(plugins)
app.use(store).use(router).mount('#app')
