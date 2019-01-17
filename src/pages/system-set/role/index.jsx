import React, { Component } from 'react';

export default class Authorize extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			superadmin:[],
			roleadmin:[]
		}
	}

	render(){
		return(
			<div className="Authorize">
			  <div className="nav col666"><span>系统管理</span>><span className="font12">权限设置</span>><span>角色权限</span></div>
			  <div className="bgcon">
			  	<div className="input-wrap">
			      <label>角色名称：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>管理范围：</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>仅个人</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>全公司</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>所在部门及其下级部门</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>特定部门</label>
			    </div>
			    <div className="input-wrap">
			      <label>权限范围：</label>
			      <label className="forlabel">
				      <input type="checkbox" className="input checkbox"/>
				      <span>全部权限（包括查看、审批管理、申请等权限）</span>
				  </label>
			    </div>
			  	<table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
					    <thead>
					    <tr>
					      <th>功能</th>
					      <th>权限</th>
					    </tr>
					    </thead>
					    <tbody>
					    {
					    	this.state.roleadmin.length
					    	?
					    	this.state.roleadmin.map(function(item,index){
					    		return <tr key={index}>
					    		<td>{item.superName}</td>
					    		<td>{item.phoneNumber}</td>
					    		</tr>
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