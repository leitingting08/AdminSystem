import React, { Component } from 'react';
import { Button } from 'antd';
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
                <Button type="primary" className="btn" onClick={this.login.bind(this)}>登录</Button>
             </div>
          </form>
        </div>
      </div>
    )
  }

  componentDidMount(){
  }

  login(e){
    e.preventDefault();
    this._sendLoginServer();
  }

  _sendLoginServer(){
    interfaceServer.sendLoginServer({
      data:this.state.loginParams,
      onSuccess:res=>{
        console.log(res)
        if(res.status){
          localStorage.setItem('USERINFO',JSON.stringify(this.state.loginParams))
          this.props.history.push({pathname:'/home'})
        }else{
          alert(res.msg)
        }
      }
    })
  }

  userlogin(e){
	  this.setState({
      loginParams:{
        username:e.target.value,
        password:this.state.loginParams.password
      }
    })
  }

  loginpass(e){
	  this.setState({
      loginParams:{
        password:e.target.value,
        username:this.state.loginParams.username
      }
    })
  }
}