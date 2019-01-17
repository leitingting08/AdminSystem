import React, { Component } from 'react';

export default class EmployeeFilesDetail extends React.Component {

	render(){
		let username = JSON.parse(localStorage.getItem('USERINFO')).username;
		return(

			<div className="EmployeeFilesDetail">
			  <div className="nav col666"><span>人事管理</span>><span className="font12">员工档案</span>><span className="font12">详情</span></div>
			  <div className="flex container">
			  	<div className="l bgcon">
			  	<div className="photo"></div>
			  	<div className="linka row">更换头像</div>
			  	<div className="col333 row">{username}</div>
			  	</div>
			  	<div className="r bgcon">
				  	<table className="table filetable" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
					    <tbody>
					    	<tr><td>姓名</td><td>{username}</td></tr>
					    	<tr><td>性别</td><td></td></tr>
					    	<tr><td>员工编号</td><td></td></tr>
					    	<tr><td>角色职位</td><td></td></tr>
					    </tbody>
				    </table>
			  	</div>
			  </div>
			  
			</div>
			)
	}

}