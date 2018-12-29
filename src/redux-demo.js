import { createStore } from 'redux'

export default function(){
	// 第一步 定义计算规则，即reducer
	function counter(state=0, action){
		// state本身不变
		switch(action.type){
			case 'INCREMENT':
				return state + 1
			case 'DECREMENT':
				return state - 1
			default:
				return state
		}
	}

	// 第二步 根据计算规则生成store
	let store = createStore(counter)

	// 第三步 定义数据（即state）变化之后的派发规则
	store.subscribe(()=>{
		console.log('fn1->current state', store.getState());
	})
	store.subscribe(()=>{
		console.log('fn2->current state', store.getState());
	})

	// 第四步 触发数据变化
	store.dispatch({type: 'INCREMENT'})
	store.dispatch({type: 'INCREMENT'})
	store.dispatch({type: 'DECREMENT'})
}