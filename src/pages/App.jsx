import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import Header from '../components/header/index'
import Menu from '../components/menu/index'
import { HashRouter, Route, hashHistory, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import List from './notice-manage/List'
import Detail from './notice-manage/Detail'
import Todo from './Todo'

// import * as userinfoActions from '../actions/userinfo'

export default class App extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
      {/*首页-主页*/}
        <Route path='/home' component={Home}/>
      {/*公告*/}
        <Route path='/app/noticelist' component={List}/>
        <Route path='/app/noticedetail/:id' component={Detail}/>
      {/*demo-todolist*/}
        <Route path='/todolist' component={Todo}/>
      {/*人事管理-档案管理、请假*/}
      {/*行政-会议室*/}
      {/*组织架构*/}
      {/*系统管理*/}
      </div>
    )
  }
  // componentDidMount() {
  // 	this.props.userinfoActions.login({
  // 		userid:'abc',
  // 		city:'beijing'
  // 	})
  // }
}

// function mapStateToProps(state){
// 	return {
// 		userinfo: state.userinfo
// 	}
// }

// function mapDispatchToProps(dispatch){
// 	return {
// 		userinfoActions: bindActionCreators(userinfoActions, dispatch)
// 	}
// }

// export default connect({
// 	mapStateToProps,
// 	mapDispatchToProps
// })(App)
