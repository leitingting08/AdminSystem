import React, { Component } from 'react';
import InterfaceServer from '../../axios/interface'
const interfaceServer = new InterfaceServer();
import OrganizeTree from '../../components/organize-tree'

export default class Organization extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			treedata:[]
		}
	}
	render(){
		let self = this
		return(
			<div className="Organization">
				<div className="nav col666"><span>组织架构</span></div>
				<div className="left-tree">
					<div className="search-wrapper">
			          <input type="text" className="input search" placeholder="请输入部门名称"/>
			          <i className="iconfont icon-sousuo"></i>
			        </div>
					<OrganizeTree treedata={this.state.treedata}/>
				</div>
			</div>
			)
	}

	componentWillMount(){
		this._sendOrganizationServer()
	}

	_sendOrganizationServer(){
		interfaceServer.sendOrganizationServer({
			onSuccess:res=>{
				console.log(res);
				this.setState({
					treedata:res.data
				})
			}
		})
	}
}