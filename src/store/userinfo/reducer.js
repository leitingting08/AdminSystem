import * as user from './action-type'

let defaultState = {
  userId:'',
  userName:''
}

// 用户消息
export const userInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SAVE_USERINFO:
      return {
        ...state,
        ...action.value
      }
    case user.RESET_USERINFO:
      return {...state, ...{[action.datatype]: action.value}};
    default:
      return state
  }
}