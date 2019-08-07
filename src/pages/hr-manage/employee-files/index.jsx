import React, { Component } from 'react';
import InterfaceServer from '../../../axios/interface'
const interfaceServer = new InterfaceServer();
import { Pagination,Button } from 'antd';

export default class EmployeeFiles extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			filelists:[],
			current:1
		}
	}

	render(){
		return(
			<div className="EmployeeFiles">
			  <div className="nav col666"><span>人事管理</span>><span className="font12">员工档案</span><Button type="primary" className="ml20" onClick={this.addFiles.bind(this)}>新增</Button></div>
			  <div className="bgcon clearFix">
			    <div className="input-wrap fl">
			      <label>员工编号：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap fl">
			      <label>姓名：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap fl">
			  		<Button type="primary" >查询</Button>
			  	</div>
			  </div>

			  <div className="bgcon">
			    <table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
				    <thead>
				    <tr>
				      <th>员工编号</th>
				      <th>姓名</th>
				      <th>手机号码</th>
				      <th>出生年月</th>
				    </tr>
				    </thead>
				    <tbody>
				    {
				    	this.state.filelists.length
				    	?
				    	this.state.filelists.map(function(item,index){
				    		return <tr key={index}>
				    		<td>{item.id}</td>
				    		<td>{item.name}</td>
				    		<td>{item.phonenumber}</td>
				    		<td>{item.birth}</td>
				    		</tr>
				    	})
				    	:<tr><td colSpan="4">暂无数据</td></tr>
				    }
				    </tbody>
			    </table>
			    <div className="txtleft mt20">
			    	<Pagination defaultCurrent={this.state.current} total={10} onChange={this.onChange.bind(this)}/>
			  	</div>
			  </div>
			</div>
			)
	}

	componentWillMount(){
		this._sendEmployeesServer()
	}

	_sendEmployeesServer(){
		interfaceServer.sendEmployeesServer({
			// data,
			onSuccess:res=>{
				console.log(res)
				this.setState({
					filelists:res.data.lists
				})
			}
		})
	}

	addFiles(){
		location.replace('#/hrmanage/employeefiles/add')
	}

	onChange(page){
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	}
}