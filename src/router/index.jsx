import React, { Component } from 'react';
  import { HashRouter, Route, hashHistory, Switch, Redirect } from 'react-router-dom'
import App from '../pages/App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import List from '../pages/List'
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'
import Layout from '../pages/Layout'

export default class RouterMap extends React.Component {
  updateHandle(){
    console.log('每次路由变化都会触发')
  }

  render() {
    return (
      <HashRouter>
        <Switch onUpdate={this.updateHandle.bind(this)}>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Layout} />
          {/*<Layout>
            <Route exact path='/' component={App}/>
            <Route path='/app/list' component={List}/>
            <Route path='/app/home' component={Home}/> 
            <Route path='/app/todolist' component={Todo}/>
            <Route path='/app/detail/:id' component={Detail}/>
          </Layout>*/}
          <Route path='*' component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}
