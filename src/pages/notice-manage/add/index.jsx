import React, { Component } from 'react';
import { Button } from 'antd';

export default class NoticeAdd extends React.Component {
  render() {
    return (
      <div className="NoticeAdd">
        <div className="nav col666"><span>公告管理</span>><span className="font12">新增</span></div>
			  
			  <div className="bgcon w100 clearFix">
			    <div className="input-wrap">
			      <label>姓名：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>时间：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>公告标题：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>接受人：</label>
			      <input type="text" className="input"/>
			    </div>
			    
			  </div>
			  <div className="row">
		         <Button type="primary">提交</Button>
		      </div>
      </div>
    )
  }
}