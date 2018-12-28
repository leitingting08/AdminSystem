import React, { Component } from 'react';
  import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'
import App from '../pages/App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import List from '../pages/List'
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'

export default class RouterMap extends React.Component {
  updateHandle(){
    console.log('每次路由变化都会触发')
  }

  render() {
    return (
      <Switch onUpdate={this.updateHandle.bind(this)}>
        <Route exact path='/' component={App}/>
        <Route path='/home' component={Home}/>
        <Route path='/list' component={List}/>
        <Route path='/login' component={Login}/>
        <Route path='/todolist' component={Todo}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    )
  }
}
