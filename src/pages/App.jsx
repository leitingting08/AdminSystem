import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/todolist">
        TOLIST
        </Link>
      </div>
    )
  }
}
