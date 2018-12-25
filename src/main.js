import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import routeConfig from './routes';
import * as serviceWorker from './serviceWorker';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(<App /> , document.getElementById('app'));
// ReactDOM.render(<Router routes={routeConfig} />, document.body)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// import React, { Component } from 'react';
// import { render } from 'react-dom';

// render(
//     <div>Hello React!</div>,
//     document.getElementById('app')
// );
