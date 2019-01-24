import * as user from './action-type'

let defaultState = {}

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

export const organizeInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SAVE_ORGANIZEINFO:
      return {
        ...state,
        ...action.value
      }
    case user.RESET_ORGANIZEINFO:
      return {...state, ...action.value};
    default:
      return state
  }
}