import * as user from './action-type'

// 保存用户消息
export const saveUserInfo = (value) => {
  return {
    type: user.SAVE_USERINFO,
    value
  }
}

// 修改用户信息
export const resetUserInfo = (datatype, value) => {
  return {
    type: user.RESET_USERINFO,
    datatype,
    value,
  }
}

// 保存组织架构下面的信息
export const saveOrganizeINFO = (value) => {
  return {
    type: user.SAVE_ORGANIZEINFO,
    value
  }
}

// 修改组织架构下面的信息
export const resetOrganizeINFO = (param) => {
  return {
    type: user.RESET_ORGANIZEINFO,
    // datatype,
    value:param,
  }
}
