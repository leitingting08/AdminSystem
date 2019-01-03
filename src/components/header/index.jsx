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
        </div>
      </div>
    )
  }
}

export default Header;