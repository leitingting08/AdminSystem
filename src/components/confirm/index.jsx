import React from 'react'
import ReactDOM from 'react-dom'
import Confirm from './confirm'
import './confirm.less'

// 创建div并append到body中
function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const notification = ReactDOM.render(<Confirm />, div)
  return {
    addNotice(notice) {
      return notification.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

let notification
const notice = (content, btns, yes, no) => {
  if (!notification) notification = createNotification()
  return notification.addNotice({ content, btns, yes, no })
}

export default {
  open(content, btns, yes, no) {
    return notice(content, btns, yes, no)
  },
}