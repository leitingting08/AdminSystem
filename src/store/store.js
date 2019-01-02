// import { createStore } from 'redux'
// import rootReducer from '../reducers'

// function configureStore(initialState){
// 	const store = createStore(rootReducer, initialState,
// 		// 触发 redux-devtools
// 		window.devToolsExtension?window.devToolsExtension():undefined
// 		)

// 	return store
// }
import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as user from './userinfo/reducer'
// import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...user}),
  // applyMiddleware(thunk)
)

export default store