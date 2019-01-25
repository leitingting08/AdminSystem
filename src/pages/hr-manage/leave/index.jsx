import React, { Component } from 'react';
import { Pagination } from 'antd';
import InterfaceServer from '../../../axios/interface'
const interfaceServer = new InterfaceServer();
import {Link} from 'react-router-dom'

export default class Leave extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			leavelists:[],
			currentPage:1
		}
	}

	render(){
		return(
			<div className="Leave">
				<div className="nav col666"><span>人事管理</span>><span className="font12">请假申请</span>>详情</div>
			    <div className="bgcon">
			      <table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
				    <thead>
				    <tr>
				      <th>请假时间</th>
				      <th>申请人</th>
				      <th>所在部门</th>
				      <th>请假类型</th>
				      <th>请假时间</th>
				      <th>请假时长</th>
				      <th>审核状态</th>
				      <th>操作</th>
				    </tr>
				    </thead>
				    <tbody>
				    {
				    	this.state.leavelists.length
				    	?
				    	this.state.leavelists.map(function(item,index){
				    		return <tr key={index}>
				    		<td>{item.applyTime}</td>
				    		<td>{item.applyName}</td>
				    		<td>{item.departmentName}</td>
				    		<td>{item.leaveType}</td>
				    		<td>{item.startTime}至{item.endTime}</td>
				    		<td>{item.leaveTime}</td>
				    		<td>{item.applyState}</td>
				    		<td><a className="linka">查看详情</a></td>
				    		</tr>
				    	})
				    	:<tr><td colSpan="8">暂无数据</td></tr>
				    }
				    </tbody>
			      </table>
			    </div>
			</div>
			)
	}

	componentWillMount(){
		this._sendLeavelistServer({currentPage:1})
	}

	_sendLeavelistServer(param){
		interfaceServer.sendLeavelistServer({
			data:param,
			onSuccess:res=>{
				console.log(res)
				this.setState({
					leavelists:res.data.lists
				})
			}
		})
	}

	onChange(page){
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	    this._sendLeavelistServer({currentPage:page})
	}

	addLeave(){
		location.replace('#/hrmanage/employeefiles/add')
	}
}