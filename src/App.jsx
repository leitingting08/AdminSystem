import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import ErrPage from './pages/errpage.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let layoutRouter = (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route  path='/Home' component={Home}></Route>
          <Route  path='/Login' component={Login}></Route>
          <Route  component={ErrPage}></Route>
        </Switch>
      </Layout>
      )
    return (
      <div>
       helloooooooooooo~
      </div>
      <Router>
        <Switch>
          <Route path='/Login' component={Login}/>
          <Route path='/' render={props =>layoutRouter}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
