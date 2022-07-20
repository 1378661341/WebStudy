import { createRouter, createWebHashHistory } from 'vue-router'
import Left from '../components/borther/Left.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routers: [
    { path: '/home', component: Left }
  ]
})