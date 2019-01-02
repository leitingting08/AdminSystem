import React, { Component } from 'react';
import List from './subpage/list';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
      <div className="title">
        {this.props.title}
      </div>
       
        <List/>
      </div>
    )
  }
}

export default Header;