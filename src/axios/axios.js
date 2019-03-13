import axios from 'axios'
import loading from '@/components/loading'

// 设置超时时间
axios.defaults.timeout = 10000

axios.interceptors.request.use(config=>{ // 请求之前加loading
  loading.open();
  return config
},error=>{
  return Promise.reject(error)
})

axios.interceptors.response.use(config=>{ // 响应成功关闭loading
  loading.close();
  return config
},error=>{
  return Promise.reject(error)
})

export default axios;
