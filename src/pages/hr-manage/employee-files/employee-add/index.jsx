import React, { Component } from 'react';

export default class EmployeeFilesAdd extends React.Component {

	render(){
		return(
			<div className="EmployeeFilesAdd">
			  <div className="nav col666"><span>人事管理</span>><span className="font12">员工档案</span>><span className="font12">新增</span></div>
			  
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
		         <button className="btn">提交</button>
		      </div>
			</div>
			)
	}

}