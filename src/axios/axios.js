import axios from 'axios'
import { baseUrl} from '../public/environment'

export default class Server{
  axios(method, url, data){
    return new Promise((resolve, reject) => {
      let _option = {
        method,
        url,
        baseUrl: baseUrl,
        timeout: 30000,
        params: null,
        data: data,
        headers: null,
        withCredentials: true,  //是否携带cookie发起请求
        validateStatus: (status)=> {
          return status >= 200 && status < 300
        },
      }
      axios.request(_option).then(res => {
        resolve(typeof res.data === 'object'? res.data:JSON.parse(res.data))
      },error =>{
        if (error.response) {
          reject(error.response.data)
        } else{
          reject(error)
        }
      })
    })
  }
}