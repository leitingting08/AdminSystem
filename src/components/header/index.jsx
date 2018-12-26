import React, { Component } from 'react';
import List from './subpage/list';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        {this.props.title}
        {this.props.abc.a}
        <List/>
      </div>
    )
  }
}

export default Header;