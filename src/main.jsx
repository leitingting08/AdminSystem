import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router';
import { Provider } from 'react-redux'
import FastClick from 'fastclick'
import { HashRouter, hashHistory } from 'react-router-dom'
import store from './store/store'
import './less/public.less'
// import { baseUrl } from '../public/environment.js'
console.log(store);
store.dispatch({type: 'SAVE_USERINFO'})
FastClick.attach(document.body)
// import configureStore from './store/configureStore'

// const store = configureStore();
// import fn from './redux-demo.js'
// fn()
// import PureRenderMixin from 'react-addons-pure-render-mixin'
// 性能测试
// import Perf from 'react-addons-perf';
// if(__DEV__){
//   window.Perf = Perf
// }

// Immutable.js优化（to see）适合数据结构层次深

// class App extends React.Component {
//   constructor(props, context){
//   	super(props, context);
//     // 性能优化
//     this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
//   	this.state = {
//   		now: Date.now()
//   	}
//   }
//   render() { //最常用的hook,返回组件要渲染的模板
//   	let s = {a:'哈哈哈'};
//     return (
//       <div className="Login">
//         <Header title="hello页面" abc={s}/>
//         <p onClick={this.clickHandler.bind(this)}>事件{this.state.now}</p>
//         {/*<ul>{
//         	arr.length===0
//         	?<p>loading...</p>
//         	:{arr.map(function(item,index){return ...})}
//         }</ul>*/}
//         <ToDo/>
//       </div>
//     )
//   }

//   clickHandler(){
//   	console.log(this.clickHandler)
//   	this.setState({
//   		now:Date.now()
//   	})
//   }
//   // 生命周期--组件第一加载时渲染完成的事件，一般在此获取网络数据
//   componentDidMount(){
//   	// 渲染完成
//   }
//   componentDidUpdate(prevProps, prevState){
//   	// 触发更新完成
//   }
//   shouldComponentUpdate(prevProps, prevState){
//      // 默认返回true
//      return true
//   }
//   componentWillUnmount(){
//   	// 清空 setTimeout setInterval
//   }
// }

ReactDOM.render(
	<Provider store={store}>
		   <RouterMap/>
	</Provider>, 
	document.getElementById('app')
);
