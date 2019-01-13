import axios from './axios'
import { baseUrl} from '../../public/environment'

export default class PublicFn {
  getUrl(url){
     return `${baseUrl}${url}`; // 打包时用这个 __ce.baseURL
  };
  //公共ajax;post请求
  postServer(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    
    axios.post(opt.url, data).then((res) => {
      if (opt.onSuccess) {
        if(!res.data.status){ // 如果后端返回status为false，会弹出后端提示的错误信息
          
          if (opt.onFailed) { // 如果是请求失败，失败回调
            opt.onFailed(res);
          }
          return;
        }
        opt.onSuccess(res.data); // 成功回调
      }
    }).catch(error => {
      console.log(error)
    });
  }

  //公共ajax;get请求
  getServer(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    // axios发起请求，get和post传参方式不一样
    axios.get(opt.url, {params: data}).then((res) => {
      if (opt.onSuccess) {
        if(!res.data.status){

          if (opt.onFailed) {
            opt.onFailed(res);
          }
          return;
        }
        opt.onSuccess(res.data);
      }
    }).catch(error => {
      console.log(error)
    });
  }

  setData(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    return data;
  }
}