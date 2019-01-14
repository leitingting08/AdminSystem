import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import Header from '../components/header/index'
import Menu from '../components/menu/index'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

// import * as userinfoActions from '../actions/userinfo'

export default class App extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      userInfo:JSON.parse(localStorage.getItem('USERINFO'))
    }
  }
  render() {
    return (
      <div className="App">
        <Header title="NINGMENG 后台管理系统" username={this.state.userInfo.username}/>
        <Menu/>
        {this.props.children
          // this.state.initDone
          // ? this.props.children
          // :<div>正在加载...</div>
        }
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
