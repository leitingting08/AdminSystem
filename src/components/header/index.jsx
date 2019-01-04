import React, { Component } from 'react';
import List from './subpage/list';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="title flex">
	        <div className="w50 txtleft"><span className="logo"></span>
          <span className="font16">{this.props.title}</span>
          </div>
	        <div className="w50 txtright pr20">
          <i className="iconfont icon-xinxi mr20"></i>
             {this.props.username}<i className="iconfont icon-arrowdropdown mr20 font30"></i>
          </div>
          <ul className="opeartion">
            <li><i className="iconfont icon-yonghu2"></i>查看档案</li>
            <li><i className="iconfont icon-xiugaimima"></i>修改密码</li>
            <li><i className="iconfont icon-tuichu"></i>退出</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;