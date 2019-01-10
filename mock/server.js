const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

router.get('/', async (ctx, next) => {
    ctx.response.body = {
		a:1,
		b:'123'
	}
});

router.post('/login', async(ctx,next)=>{
	var 
	username = ctx.request.body.username || '',
	password = ctx.request.body.password || '';
	console.log(`signin with username: ${username}, password: ${password}`);
   if (username === 'admin' && password === '123456') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
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