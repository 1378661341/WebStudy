import axios from 'axios'
import { hunhe } from '../mixin/mixin'
import { ElLoading } from 'element-plus'
export default {
  install(app) {
    app.mixin(hunhe)
    axios.defaults.baseURL = 'http://localhost:8080'
    axios.interceptors.request.use(function (config) {
      if (config.headers) {
        // 1.请求前配置【Token】值
        config.headers.Authorization = 'Bearer XXX'
        ElLoading.service({ fullscreen: true })
      }
      return config
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    })
    axios.interceptors.response.use((res) => {
      return res
    })
    app.config.globalProperties.$http = axios
  }
}
