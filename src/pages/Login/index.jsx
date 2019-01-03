import React, { Component } from 'react';
import '../../less/login.less'

export default class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <form className="form">
           <div className="row tit">
              XXX后台管理系统
           </div>
           <div className="row">
              <input type="text" placeholder="请输入用户名" value="admin" />
           </div>
           <div className="row">
              <input type="password" placeholder="请输入密码" value="123456" />
           </div>
           <div className="row">
              <button className="btn">登录</button>
           </div>
        </form>
      </div>
    )
  }
}