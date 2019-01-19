import PublicFn from './service';

let PublicMethod = new PublicFn();

export default class InterfaceServer{
    sendLoginServer(opt){ // login
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/login')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendUserinfoServer(opt){ // 获取员工信息
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/userinfo')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendEmployeesServer(opt){ // 获取员工信息列表
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/employees')
        PublicMethod.getServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendNoticelistServer(opt){ // 获取公告列表
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/noticelist')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendLeavelistServer(opt){ // 获取请假申请列表
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/leavelist')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendOrganizationServer(opt){ // 获取组织架构信息
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/organization')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendSuperadminServer(opt){ // 获取超级管理员列表信息
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/superadmin')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }

    sendRoleadminServer(opt){ // 获取角色权限列表信息
        const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/api/roleadmin')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }
    
}