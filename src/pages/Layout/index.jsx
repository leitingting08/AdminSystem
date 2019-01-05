import React, { Component } from 'react';
import Header from '../../components/header/index'
import Menu from '../../components/menu/index'
import App from '../App'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Header title="NINGMENG 后台管理系统" username="柠檬"/>
        <Menu/>
        <App/>
      </div>
    )
  }
}