import axios from 'axios'
// import { Toast } from 'antd'


// 设置超时时间
axios.defaults.timeout = 10000

axios.interceptors.request.use(config=>{ // 请求之前加loading
  // Toast.loading('加载中')
  return config
},error=>{
  return Promise.reject(error)
})

axios.interceptors.response.use(config=>{ // 响应成功关闭loading
  // Toast.hide()
  return config
},error=>{
  return Promise.reject(error)
})

export default axios;
