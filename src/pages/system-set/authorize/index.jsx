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
			  <div className="nav col666"><span>系统管理</span>><span className="font12">权限设置</span><button className="btn ml20">新增</button></div>
			  <div className="bgcon">
			  	  <div className="txtleft mb20">超级管理员 <button className="btn">+新增</button></div>
				  <table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
					    <thead>
					    <tr>
					      <th>姓名</th>
					      <th>手机号码</th>
					      <th>操作</th>
					    </tr>
					    </thead>
					    <tbody>
					    {
					    	this.state.superadmin.length
					    	?
					    	this.state.superadmin.map(function(item,index){
					    		return <tr key={index}>
					    		<td>{item.superName}</td>
					    		<td>{item.phoneNumber}</td>
					    		<td><a className="linka">删除</a></td>
					    		</tr>
					    	})
					    	:<tr><td colSpan="3">暂无数据</td></tr>
					    }
					    </tbody>
				  </table>
			  </div>
			  <div className="bgcon">
			  	  <div className="txtleft mb20">角色权限 <button className="btn">+新增</button></div>
				  <table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
					    <thead>
					    <tr>
					      <th>角色姓名</th>
					      <th>权限</th>
					      <th>操作</th>
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
					    		<td><a className="linka">编辑</a><a className="linka">删除</a></td>
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