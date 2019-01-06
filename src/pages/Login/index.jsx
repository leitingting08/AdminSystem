import React, { Component } from 'react';
import '../../less/login.less'

export default class Login extends React.Component {
  constructor(props,context){
  	super(props,context)
  	this.state = {
			loginParams:{
				user:'admin',
				pass:'123456'
			}
		}
  }
  render() {
    return (
      <div className="Login">
        <div className="container">
          <form className="form">
             <div className="row tit">
                NINGMENG 后台管理系统
             </div>
             <div className="row">
                <input type="text" placeholder="请输入用户名" value={this.state.loginParams.user} onChange={this.userlogin.bind(this)}/>
                <i className="iconfont icon-yonghu2"></i>
             </div>
             <div className="row">
                <input type="password" placeholder="请输入密码" value={this.state.loginParams.pass} onChange={this.loginpass.bind(this)}/>
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

  login(){
  	this.props.history.push({pathname:'/home'})
  }

  userlogin(e){
  	let that = this;
	that.setState({loginParams:{user:e.target.value}})
  }

  loginpass(e){
  	let that = this;
	that.setState({loginParams:{pass:e.target.value}})
  }
}