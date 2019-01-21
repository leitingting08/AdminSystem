import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from '../components/header/index'
import Menu from '../components/menu/index'
import * as userinfoActions from '../store/userinfo/action'

class App extends React.Component {

  constructor(props,context){
    super(props,context)
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Header title="NINGMENG 后台管理系统" username={this.props.userInfo.username}/>
        <Menu />
        {this.props.children}
      </div>
    )
  }
  componentDidMount() {
    let userInfo = JSON.parse(localStorage.getItem('USERINFO'))
  	this.props.userInfoActions.saveUserInfo(userInfo)
  }
}

function mapStateToProps(state){
	return {
		userInfo: state.userInfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
