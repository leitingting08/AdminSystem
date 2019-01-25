import React, { Component } from 'react';

export default class LeaveDeatil extends React.Component {

	render(){
		return(
			<div className="LeaveDeatil">
			  <div className="nav col666"><span>人事管理</span>><span className="font12">请假申请</span>>详情</div>
			  <div className="bgcon clearFix">
			    <div className="input-wrap">
			      <label>员工编号：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>姓名：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>性别：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>手机号码：</label>
			      <input type="text" className="input"/>
			    </div>
			    
			  </div>
			  <div className="row">
		         <button className="btn submit">提交</button>
		      </div>
			</div>
			)
	}

}