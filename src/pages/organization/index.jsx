import React, { Component } from 'react';
import InterfaceServer from '@/axios/interface'
const interfaceServer = new InterfaceServer();
import OrganizeTree from '@/components/organize-tree'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as infoActions from '@/store/userinfo/action'
import store from '@/store/store'

class Organization extends React.Component {

	constructor(props,context){
		super(props,context)
		this.state = {
			treedata:[],
		}
	}

	render(){
		let s = store.getState().organizeInfo
		return(
			<div className="Organization">
				<div className="nav col666"><span>组织架构</span></div>
				<div className="flex">
					<div className="left-tree">
						<div className="search-wrapper">
				          <input type="text" className="input search" placeholder="请输入部门名称"/>
				          <i className="iconfont icon-sousuo"></i>
				        </div>
						<OrganizeTree treedata={this.state.treedata} toggleTree={this.toggleTree.bind(this)} showDepart={this.showDepart.bind(this)}/>
					</div>
					<div className="right-con bgcon txtleft">
					    <div className="title"><i className="iconfont icon-zuzhi"></i>才华有限公司 <button className="btn">编辑</button></div>
					    <div className="title bt1p"><i className="iconfont icon-bumen"></i>下级部门 <button className="btn">增加</button></div>
					    {
					    	s.department&&s.department.length?
					    	<table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
			    				<thead>
			    				<tr>
			    					<th>部门名称</th>
			    					<th>部门主管</th>
			    					<th>操作</th>
			    				</tr>
			    				</thead>
			    				<tbody>
					    		{
					    			s.department.map(function(item,index){
					    				return <tr key={index}>
					    					<td>{item.departmentName}</td>
					    					<td>{item.supervisor}</td>
					    					<td><a className="linka">编辑</a><a className="linka">删除</a></td>
					    				</tr>
					    			})
					    		}
					    		</tbody>
					    	</table>
					    	:<div>暂无下级部门</div>
					    }
					    <div className="title bt1p"><i className="iconfont icon-bumen1"></i>部门员工 <button className="btn">增加</button></div>
						{
					    	s.employees&&s.employees.length?
					    	<table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
					    		<thead>
			    				<tr>
			    					<th>姓名</th>
			    					<th>职位名称</th>
			    					<th>联系电话</th>
			    					<th>操作</th>
			    				</tr>
			    				</thead>
			    				<tbody>
					    		{
					    			s.employees.map(function(item,index){
					    				return <tr key={index}>
					    					<td>{item.emName}</td>
					    					<td>{item.poName}</td>
					    					<td>{item.emPhone}</td>
					    					<td><a className="linka">编辑</a><a className="linka">删除</a></td>
					    				</tr>
					    			})
					    		}
					    		</tbody>
					    	</table>
					    	:<div>暂无下级部门</div>
					    }
					</div>
				</div>
			</div>
			)
	}

	componentWillMount(){
		this._sendOrganizationServer()
		console.log(store.getState().organizeInfo);
		let organizeInfo = store.getState().organizeInfo
		this._sendShowemployeeServer({departmentName:'才华有限公司'})
		
	}

	_sendOrganizationServer(){
		interfaceServer.sendOrganizationServer({
			onSuccess:res=>{
				console.log(res);
				let result = res.data
				result.forEach(item=>{
					item.show = true;
					if(item.departs){
						item.departs.forEach(i=>{
							i.show = true
						})
					}
				})
				this.setState({
					treedata:result
				})
				
			}
		})
	}

	_sendShowemployeeServer(param){
		interfaceServer.sendShowemployeeServer({
			data:param,
			onSuccess:res=>{
				console.log(res);
				// 保存到redux里
				this.props.organizeInfoActions.saveOrganizeINFO(res.data)
			}
		})
	}

	toggleTree(item,index){
		item.show = !item.show;
		this.setState({
			treedata:this.state.treedata
		})
	}

	showDepart(item){
		console.log(item);
		this._sendShowemployeeServer({departmentName:item.departmentName})
	}
}

function mapStateToProps(state){
	return {
		organizeInfo: state.organizeInfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		organizeInfoActions: bindActionCreators(infoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Organization)
