import { combineReducers } from 'redux'
import userinfo from './userinfo'

const rootReducer = combineReducers({
	userinfo: userinfo
})

export default rootReducer