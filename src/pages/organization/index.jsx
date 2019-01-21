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
		return(
			<div className="Organization">
				<div className="nav col666"><span>组织架构</span></div>
				<div className="left-tree">
					<div className="search-wrapper">
			          <input type="text" className="input search" placeholder="请输入部门名称"/>
			          <i className="iconfont icon-sousuo"></i>
			        </div>
					<OrganizeTree treedata={this.state.treedata} toggleTree={this.toggle.bind(this)}/>
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

	toggle(item){
		console.log(item);
	}
}