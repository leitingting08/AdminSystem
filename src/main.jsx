import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router';
import { Provider } from 'react-redux'
import FastClick from 'fastclick'
import { HashRouter, hashHistory } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import store from './store/store'
// import './less/public.less'

FastClick.attach(document.body)
window.store = store

const render = Component =>{
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
			   <Component/>
			</AppContainer>
		</Provider>, 
		document.getElementById('app')
	);
}


render(RouterMap);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', () => {
        render(RouterMap);
    })
}
