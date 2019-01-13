import React, { Component } from 'react';
import { IndexRoute, BrowserRouter, HashRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../pages/App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'
// import Layout from '../pages/Layout'
import List from '../pages/notice-manage/List'
import Detail from '../pages/notice-manage/Detail'
import Leave from '../pages/hr-manage/leave'
import EmployeeFiles from '../pages/hr-manage/employee-files'
import EmployeeFilesAdd from '../pages/hr-manage/employee-files/employee-add'
import Organization from '../pages/Organization'
import Authorize from '../pages/system-set/authorize'

class RouterMap extends React.Component {
  updateHandle(){
    console.log('每次路由变化都会触发')
  }

  render() {
    return (
      <HashRouter history={this.props.history}>
        <Switch onUpdate={this.updateHandle.bind(this)}>
          <Route exact path='/login' component={Login}/>
          {/*<Route path='/' component={Layout} />*/}
          <App>
          {/*首页-主页*/}
           <Route exact path='/' component={Home}/>
          {/*公告*/}
            <Route path='/noticelist' component={List}/>
            <Route path='/noticedetail/:id' component={Detail}/>
          {/*demo-todolist*/}
            <Route path='/todolist' component={Todo}/>
          {/*人事管理-档案管理、请假*/}
            <Route exact path='/hrmanage/employeefiles' component={EmployeeFiles}/>
            <Route exact path='/hrmanage/employeefiles/add' component={EmployeeFilesAdd}/>
            <Route path='/hrmanage/leave' component={Leave}/>
          {/*行政-会议室*/}
          {/*组织架构*/}
            <Route path='/organization' component={Organization}/>
          {/*系统管理*/}
            <Route path='/systemset/authorize' component={Authorize}/>
          </App>
          <Route path='*' component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default RouterMap
