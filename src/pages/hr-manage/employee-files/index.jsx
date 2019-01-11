import React, { Component } from 'react';

export default class EmployeeFiles extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			filelists:[]
		}
	}

	render(){
		return(
			<div className="EmployeeFiles">
			  <div className="flex bgcon">
			    <div className="input-wrap">
			      <label>员工编号：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>姓名：</label>
			      <input type="text" className="input"/>
			    </div>
			  	<button className="btn">查询</button>
			  </div>

			  <div className="flex bgcon">
			    <table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
				    <thead>
				    <tr>
				      <th>员工编号</th>
				      <th>姓名</th>
				      <th>出生年月</th>
				    </tr>
				    </thead>
				    <tbody>
				    {
				    	this.state.filelists.length
				    	?
				    	this.state.filelists.map(function(item,index){
				    		return <tr><td>{item.id}</td></tr>
				    	})
				    	:<tr><td colSpan="3">暂无数据</td></tr>
				    }
				    </tbody>
			    </table>
			  </div>
			</div>
			)
	}
}