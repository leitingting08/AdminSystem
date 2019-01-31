import React, { Component } from 'react'

export default class Confirm extends Component {
  constructor() {
    super()
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
      notices: notices
    })
  }

  render() {
    const { notices } = this.state
    return (
      <div className="confirm">
        {
          notices.map(notice => (
            <div className="confirm_bg" key={notice.key}>
              <span className='confirm_box'>
                <div className='confirm_text'>{notice.content}</div>
                <div className='confirm_btn'>
                {
                  notice.btn.map(button => (
                    <button>{button}</button>
                  ))
                }
                </div> 
              </span>
            </div>
          ))
        }
      </div>
    )
  }
}