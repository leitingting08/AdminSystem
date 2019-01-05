import React, { Component } from 'react';

export default class ErrPage extends React.Component {
  render() {
    return (
      <div className="ErrPage">
        <div className="txtcenter"><img src={require('../../assets/pic/404.gif')} /></div>
        <div className="txtcenter">404 NotFound</div>
        <div className="txtcenter">呜呜~页面被独眼morty带走了，稍候再试哦~</div>
      </div>
    )
  }
}