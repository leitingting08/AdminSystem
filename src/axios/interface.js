import PublicFn from './service';

let PublicMethod = new PublicFn();

export default class InterfaceServer{
    sendLoginServer(opt){ // login
		const data = PublicMethod.setData(opt)
        const url = PublicMethod.getUrl('/login')
        PublicMethod.postServer({url, data , onSuccess:opt.onSuccess, onFailed:opt.onFalied})
    }
}