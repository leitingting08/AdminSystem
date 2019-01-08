import React, { Component } from 'react';
import { BrowserRouter, HashRouter, HashHistory, Route, Switch, Redirect } from 'react-router-dom'
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
      <HashRouter>
        <Switch onUpdate={this.updateHandle.bind(this)}>
          <Route exact path='/login' component={Login}/>
          <Route path='/' component={Layout} />
          {/*<Route path='/app' component={App} />*/}
          {/*<Layout>*/}
            {/*<Route exact path='/' component={App}/>*/}
            {/*<Route path='/app/list' component={List}/>*/}
            {/*<Route path='/home' component={Home}/> */}
            {/*<Route path='/app/todolist' component={Todo}/>*/}
            {/*<Route path='/app/detail/:id' component={Detail}/>*/}
          {/*</Layout>*/}
          <Route path='*' component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}
