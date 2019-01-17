import React, {Component} from 'react'
import Input from './subpage/input'
import List from './subpage/list'
import { Tree } from 'antd';
const { TreeNode } = Tree

import InterfaceServer from '../../axios/interface'
const interfaceServer = new InterfaceServer();

export default class ToDo extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			lists:[],
			treeData: [], //存放初始化加载的菜单内容，即第一层级菜单内容
			TreeNodeData: [], //存放获取的子菜单内容
		}
	}

	render(){
		return (
			<div className="ToDo">
				<Input submitFn={this.submitFn.bind(this)}/>
				<List lists={this.state.lists} deleteFn={this.deleteFn.bind(this)}/>
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
					treeData:res.data
				})
			}
		})
	}
	renderTreeNodes(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} title={item.title} dataRef={item} />;
        });
    }
	submitFn(value){
		let that = this;
		const id = that.state.lists.length;
		that.setState({
			lists: that.state.lists.concat({
				id: id,
				text: value
			})
		})
	}
	deleteFn(id){
		let that = this;
		let data = that.state.lists;
		that.setState({
			lists: data.filter(item=>{
				if(item.id!==id){
					return item
				}
			})
		})
	}
} 

