import React, { Component } from 'react';
import {HashRouter, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Auth from './auth'
import App from '../pages/App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'
import List from '../pages/notice-manage/List'
import Detail from '../pages/notice-manage/Detail'
import Leave from '../pages/hr-manage/leave'
import EmployeeFiles from '../pages/hr-manage/employee-files'
import EmployeeFilesAdd from '../pages/hr-manage/employee-files/employee-add'
import Organization from '../pages/Organization'
import Authorize from '../pages/system-set/authorize'


import * as userinfoActions from '../store/userinfo/action'

class RouterMap extends React.Component {
  constructor(props,context){
    super(props,context)
  }

  render() {
    const routerConfig = [
        {path:'/',component:Home,auth:true},
        {path:'/home',component:Home,auth:true},
        {path:'/noticelist',component:List,auth:true},
        {path:'/noticedetail/:id',component:Detail,auth:true},
        {path:'/todolist',component:Todo,auth:true},
        {path:'/hrmanage/employeefiles',component:EmployeeFiles,auth:true},
        {path:'/hrmanage/employeefiles/add',component:EmployeeFilesAdd,auth:true},
        {path:'/hrmanage/leave',component:Leave,auth:true},
        {path:'/organization',component:Organization,auth:true},
        {path:'/systemset/authorize',component:Authorize,auth:true},
        {path:'/login',component:Login},
        {path:'/404',component:NotFound}
    ];
    return (
      <HashRouter history={this.props.history}>
        <Switch>
          <Auth config={routerConfig} />
          
        </Switch>
      </HashRouter>
    )
  }

  componentWillMount(){
      this.props.userinfoActions.saveUserInfo();
  }
}

function mapStateToProps(state){
 return {
   userInfo: state.userInfo
 }
}

function mapDispatchToProps(dispatch){
 return {
   userinfoActions: bindActionCreators(userinfoActions, dispatch)
 }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterMap)