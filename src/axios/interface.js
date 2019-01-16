import PublicFn from './service';

let PublicMethod = new PublicFn();

export default class InterfaceServer{
    sendLoginServer(opt){ // login
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/login')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendEmployeesServer(opt){ // 获取员工信息
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/employees')
        PublicMethod.getServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendOrganizationServer(opt){ // 获取组织架构信息
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/organization')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }
    
}