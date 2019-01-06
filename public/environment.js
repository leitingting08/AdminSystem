// (function (global, factory) {
//   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//     typeof define === 'function' && define.amd ? define(factory) :
//       (global.__ce = factory())
// })(this, (function () {
//   return {
//     _: {},
//     debug: true,
//     baseURL: ''
//   }
// }));
// 全局配置

let baseUrl = ''
let imgUrl
if (process.env.NODE_ENV === 'development'){
  imgUrl = ''
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
  imgUrl = ''
}

export  {
  baseUrl,
  imgUrl
}
