const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/', async (ctx, next) => {
    ctx.response.body = {
		a:1,
		b:'123'
	}
});

router.get('/api/employees', async (ctx, next) => {
    ctx.response.body = {
        status:true,
        data:[
        {id:'N001',name:'张珊',phonenumber:'13912341000',birth:'1998-01-08'},
        {id:'N002',name:'李珊',phonenumber:'13912342000',birth:'1998-01-08'},
        {id:'N003',name:'旺珊',phonenumber:'13912343000',birth:'1998-01-08'},
        ],
        msg:'获取数据成功'
    }
});

router.post('/api/login',koaBody, async(ctx,next)=>{
	var 
	username = ctx.request.body.username || '',
	password = ctx.request.body.password || '';
	console.log(`signin with username: ${username}, password: ${password}`);
   if (username === 'admin' && password === '123456') {
        ctx.response.body = {
            status:true,
            data:null,
            mag:'登录成功'
        }
    } else {
        ctx.response.body = {
            status:false,
            data:null,
            mag:'用户名或密码错误'
        }
    }
})

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');

// router.post('/notice/add', koaBody, function *(next){
// 	console.log(this.request.body)
// 	this.body = JSON.stringify(this.request.body)
// })

// app.use(router.routes())
// 	.use(router.allowedMethods());

// app.listen(3000);