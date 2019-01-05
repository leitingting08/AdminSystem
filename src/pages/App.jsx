import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import Header from '../components/header/index'
import Menu from '../components/menu/index'
import { HashRouter, Route, hashHistory, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import List from './List'
import Detail from './Detail'
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
        <Route path='/app/list' component={List}/>
        <Route path='/app/home' component={Home}/>
        <Route path='/app/todolist' component={Todo}/>
        <Route path='/app/detail/:id' component={Detail}/>
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
