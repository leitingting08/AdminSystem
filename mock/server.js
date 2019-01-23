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
// 员工档案列表
router.get('/api/employees', async (ctx, next) => {
    ctx.response.body = {
        status:true,
        data:{
            lists:[
            {id:'N001',name:'张珊',phonenumber:'13912341000',birth:'1998-01-08'},
            {id:'N002',name:'李珊',phonenumber:'13912342000',birth:'1998-01-08'},
            {id:'N003',name:'旺珊',phonenumber:'13912343000',birth:'1998-01-08'},
            ],
            currentPage:1,
            totalCount:10,
            pageSize:10
        },
        msg:'获取数据成功'
    }
});
// 角色信息
router.post('/api/userinfo',koaBody, async(ctx,next)=>{
    ctx.response.body = {
        status:true,
        data:{name:'柠檬',sex:0,emId:'N001',position:'前端工程师'},
        msg:'获取数据成功'
    }
})
// 登陆
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
// 公告列表
router.post('/api/noticelist',koaBody, async (ctx, next) => {
    ctx.response.body = {
        status:true,
        data:{
            lists:[
            {noticeId:'N001',title:'公告标题1',createName:'张三',receiveName:'才华有限公司',creatTime:'1998-01-08'},
            {noticeId:'N002',title:'公告标题2',createName:'李四',receiveName:'研发部',creatTime:'1998-01-08'},
            {noticeId:'N003',title:'公告标题3',createName:'王五',receiveName:'营销部',creatTime:'1998-01-08'},
            ],
            currentPage:1,
            totalCount:10,
            pageSize:10
        },
        msg:'获取数据成功'
    }
});
// 请假申请列表
router.post('/api/leavelist',koaBody, async(ctx,next)=>{
    var currentPage = ctx.request.body.currentPage || '';
    let data;
    if(currentPage===1){
        data = {
            lists:[
            {leaveId:'N001',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N002',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N004',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N005',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N006',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N007',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N008',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N009',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N010',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            ],
            currentPage:1,
            totalCount:13,
            pageSize:10
        }
    }
    if(currentPage===2){
        data = {
            lists:[
            {leaveId:'N001',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N002',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            {leaveId:'N010',applyTime:'2019-01-18 17:00',startTime:'2019-01-20 09:00',endTime:'2019-01-20 18:00',applyName:'张伟',departmentName:'研发部',leaveType:'年假',leaveTime:'8',applyState:'已通过'},
            ],
            currentPage:2,
            totalCount:13,
            pageSize:10
        }
    }
    ctx.response.body = {
        status:true,
        data:data,
        msg:'获取数据成功'
    }
})
// 组织架构
router.post('/api/organization',koaBody, async(ctx,next)=>{
    ctx.response.body = {
        status:true,
        data:[{departmentName:'才华有限公司',
            departs:[
            {departmentName:'营销部',
            departs:[{departmentName:'营销一组'},{departmentName:'营销二组'},{departmentName:'营销三组'}]},
            {departmentName:'技术部',
            departs:[{departmentName:'技术一组'},{departmentName:'技术二组'},{departmentName:'技术三组'}]},
            {departmentName:'服务部',
            departs:[{departmentName:'服务一组'},{departmentName:'服务二组'}]}
            ]
            }],
        msg:'获取数据成功'
    }
})
// 组织架构下部门关系及人员
router.post('/api/showemployee',koaBody, async(ctx,next)=>{
    var departmentName = ctx.request.body.departmentName || '';
    var data = {};
    if(departmentName==='才华有限公司'){
        data.current=[{emId:100,supervisor:'柠檬'}];
        data.department=[
        {emId:100,supervisor:'柠檬',departmentName:'营销部'},
        {emId:101,supervisor:'柠檬1',departmentName:'技术部'},
        {emId:102,supervisor:'柠檬2',departmentName:'服务部'},
        ];
        data.employees=[];
    }
    else if(departmentName==='营销部'){
        data.current=[{emId:100,supervisor:'柠檬0'}];
        data.department=[
        {emId:200,supervisor:'柠檬3',departmentName:'营销一组'},
        {emId:201,supervisor:'柠檬4',departmentName:'营销二组'},
        {emId:202,supervisor:'柠檬5',departmentName:'营销三组'},
        ];
        data.employees=[
        {emId:300,emName:'柠檬6',emNumber:'N300',poName:'营销经理',emPhone:'13111232560'},
        {emId:301,emName:'柠檬7',emNumber:'N301',poName:'客户经理',emPhone:'13111232561'},
        {emId:302,emName:'柠檬8',emNumber:'N302',poName:'客户经理',emPhone:'13111232562'},
        ];
    }
    else if(departmentName==='技术部'){
        data.current=[{emId:100,supervisor:'柠檬1'}];
        data.department=[
        {emId:220,supervisor:'柠檬23',departmentName:'营销一组'},
        {emId:221,supervisor:'柠檬24',departmentName:'营销二组'},
        {emId:222,supervisor:'柠檬25',departmentName:'营销三组'},
        ];
        data.employees=[
        {emId:320,emName:'柠檬26',emNumber:'N320',poName:'技术经理',emPhone:'13111232560'},
        {emId:321,emName:'柠檬27',emNumber:'N321',poName:'产品经理',emPhone:'13111232561'},
        {emId:322,emName:'柠檬28',emNumber:'N322',poName:'开发工程师',emPhone:'13111232562'},
        ];
    }
    else if(departmentName==='服务部'){
        data.current=[{emId:100,supervisor:'柠檬2'}];
        data.department=[
        {emId:200,supervisor:'柠檬3',departmentName:'服务一组'},
        {emId:201,supervisor:'柠檬4',departmentName:'服务二组'},
        {emId:202,supervisor:'柠檬5',departmentName:'服务三组'},
        ];
        data.employees=[];
    }
    else if(departmentName==='营销一组'||departmentName==='营销二组'||departmentName==='营销三组'){
        data.current=[{emId:100,supervisor:'柠檬'}];
        data.department=[];
        data.employees=[ {emId:300,emName:'柠檬6',emNumber:'N300',poName:'营销经理',emPhone:'13111232560'},];
    }else{
        data.current=[{emId:100,supervisor:'柠檬'}];
        data.department=[];
        data.employees=[];
    }
    ctx.response.body = {
        status:true,
        data:data,
        msg:'获取数据成功'
    }
})
// 超级管理员列表
router.post('/api/superadmin',koaBody, async(ctx,next)=>{
    ctx.response.body = {
        status:true,
        data:{
            lists:[
            {emId:'N001',username:'张三',phoneNumber:'13512345671'},
            {emId:'N002',username:'李四',phoneNumber:'13612345672'},
            {emId:'N003',username:'王五',phoneNumber:'13612345673'},
            ],
            currentPage:1,
            totalCount:10,
            pageSize:10
        },
        msg:'获取数据成功'
    }
})

// 角色权限列表
router.post('/api/roleadmin',koaBody, async(ctx,next)=>{
    ctx.response.body = {
        status:true,
        data:{
            lists:[
            {roleId:'N001',roleName:'CEO',roleAdmin:'请假、公告、组织架构、系统设置'},
            {roleId:'N002',roleName:'人事经理',roleAdmin:'请假、公告'},
            {roleId:'N003',roleName:'前端工程师',roleAdmin:'请假、公告'},
            ],
            currentPage:1,
            totalCount:10,
            pageSize:10
        },
        msg:'获取数据成功'
    }
})
// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');35