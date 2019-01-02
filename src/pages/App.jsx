import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import Todo from './Todo'
import List from './List'
import Header from '../components/header/index'
import '../less/public.less'

// import * as userinfoActions from '../actions/userinfo'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header title="首页"/>
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
