import React, { Component } from 'react';
import { BrowserRouter, HashRouter, hashHistory, Route, Switch, Redirect } from 'react-router-dom'
import App from '../pages/App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'
import Layout from '../pages/Layout'

export default class RouterMap extends React.Component {
  updateHandle(){
    console.log('每次路由变化都会触发')
  }

  render() {
    return (
      <HashRouter history={hashHistory}>
        <Switch onUpdate={this.updateHandle.bind(this)}>
          <Route exact path='/login' component={Login}/>
          <Route path='/' component={Layout} />
          <Route path='*' component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}
