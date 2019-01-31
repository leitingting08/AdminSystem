import React, { Component } from 'react'

export default class Toast extends Component {
  constructor() {
    super()
    this.transitionTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()

    // notices.push(notice);//展示所有的提示
    notices[0] = notice;//仅展示最后一个提示
    
    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => { this.removeNotice(notice.key) }
  }

  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      })
    })
  }

  render() {
    const { notices } = this.state
    const icons = {
      info: 'toast_info',
      success: 'toast_success',
      error: 'toast_error',
      loading: 'toast_loading'
    }
    return (
      <div className="toast">
        {
          notices.map(notice => (
            <div className="toast_bg" key={notice.key}>
              <span className='toast_box'>
                <span className={`toast_icon ${icons[notice.type]}`}></span>
                <span className='toast_text'>{notice.content}</span> 
              </span>
            </div>
          ))
        }
      </div>
    )
  }
}