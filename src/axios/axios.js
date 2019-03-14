import axios from 'axios'
import loading from '@/components/loading'
import MProgress from '@/components/progress'

// 设置超时时间
axios.defaults.timeout = 10000

axios.interceptors.request.use(config=>{ // 请求之前加loading
  // loading.open();
  MProgress.start();
  return config
},error=>{
  return Promise.reject(error)
})

axios.interceptors.response.use(config=>{ // 响应成功关闭loading
  // loading.close();
  MProgress.done();
  
  // NProgress.remove();
  return config
},error=>{
  return Promise.reject(error)
})

export default axios;
