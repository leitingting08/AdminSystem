var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();

router.get('/',function*(next){
	this.body = 'hello koa !'
})

router.get('/notice/list',function*(next){
	this.body = {
		a:1,
		b:'123'
	}
})

router.post('/notice/add', koaBody, function *(next){
	console.log(this.request.body)
	this.body = JSON.stringify(this.request.body)
})

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);