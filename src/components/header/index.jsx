import React, { Component } from 'react';
import List from './subpage/list';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="title flex">
	        <div className="w50 txtleft"><span className="logo"></span>{this.props.title}</div>
	        <div className="w50 txtright pr20">{this.props.username}</div>
        </div>
      </div>
    )
  }
}

export default Header;