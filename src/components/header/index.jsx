import React, { Component } from 'react';
import List from './subpage/list';

class Header extends React.Component {
  constructor(props, context){
    super(props,context)
    this.state = {
      showul:false
    }
  }
  render() {
    return (
      <div className="Header">
        <div className="title flex">
	        <div className="w50 txtleft"><span className="logo"></span>
          <span className="font16">{this.props.title}</span>
          </div>
	        <div className="w50 txtright pr20">
          <i className="iconfont icon-xinxi mr20"></i>
             <span className="username" onClick={this.clickUserName.bind(this)}>{this.props.username}
             <i className={`iconfont mr20 font30 ${this.state.showul?'icon-arrow-up-2':'icon-arrowdropdown'}`}></i>
             </span>
          </div>
          <ul className={`opeartion ${this.state.showul?'show':'hide'}`}>
            <span className="trangle"></span>
            <li><i className="iconfont icon-yonghu2"></i>查看档案</li>
            <li><i className="iconfont icon-xiugaimima"></i>修改密码</li>
            <li><i className="iconfont icon-tuichu"></i>退出</li>
          </ul>
        </div>
      </div>
    )
  }
  clickUserName(){
    this.setState({
      showul:!this.state.showul
    })
  }
}

export default Header;