import React, { Component } from 'react';
import '../../less/login.less'
import InterfaceServer from '../../axios/interface'
const interfaceServer = new InterfaceServer();

export default class Login extends React.Component {
  constructor(props,context){
  	super(props,context)
  	this.state = {
			loginParams:{
				username:'admin',
				password:'123456'
			}
		}
  }
  render() {
    return (
      <div className="Login">
        <div className="container">
          <form className="form" autoComplete="off">
             <div className="row tit">
                NINGMENG 后台管理系统
             </div>
             <div className="row">
                <input type="text" placeholder="请输入用户名" value={this.state.loginParams.username} onChange={this.userlogin.bind(this)} autoComplete="off"/>
                <i className="iconfont icon-yonghu2"></i>
             </div>
             <div className="row">
                <input type="password" placeholder="请输入密码" value={this.state.loginParams.password} onChange={this.loginpass.bind(this)} autoComplete="off"/>
                <i className="iconfont icon-mima"></i>
             </div>
             <div className="row">
                <button className="btn" onClick={this.login.bind(this)}>登录</button>
             </div>
          </form>
        </div>
      </div>
    )
  }

  componentDidMount(){
    // console.log(store.getState());
  }

  login(e){
    e.preventDefault();
    this._sendLoginServer();
  	// this.props.history.push({pathname:'/home'})
  }

  _sendLoginServer(){
    interfaceServer.sendLoginServer({
      data:this.state.loginParams,
      onSuccess:res=>{
        console.log(res)
        if(res.status){
          
          this.props.history.push({pathname:'/home'})
          localStorage.setItem('USERINFO',JSON.stringify(this.state.loginParams))
          store.dispatch({type:'SAVE_USERINFO',value:this.state.loginParams})
          // location.replace('#/home')
        }else{
          alert(res.msg)
        }
      }
    })
  }

  userlogin(e){
  	let that = this;
	that.setState({loginParams:{username:e.target.value}})
  }

  loginpass(e){
  	let that = this;
	that.setState({loginParams:{password:e.target.value}})
  }
}