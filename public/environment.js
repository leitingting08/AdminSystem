// 全局配置

let baseUrl = ''
if (process.env.NODE_ENV === 'development'){
	console.log('开发环境');
	baseUrl = ''
} else if (process.env.NODE_ENV === 'production') {
	console.log('生产环境');
    baseUrl = ''
}

export  {
  baseUrl
}
