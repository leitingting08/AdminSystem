import React, {Component} from 'react'
import Input from './subpage/input'
import List from './subpage/list'
import SelectCity from './subpage/selectCity'
import { Tree } from 'antd';
const { TreeNode } = Tree

import Mask from '@/components/mask'

import InterfaceServer from '@/axios/interface'
const interfaceServer = new InterfaceServer();

export default class ToDo extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			lists:[],
			treeData: [], //存放初始化加载的菜单内容，即第一层级菜单内容
			TreeNodeData: [], //存放获取的子菜单内容
			showCitySelect:false,
			city:'北京'
		}
	}

	render(){
		return (
			<div className="ToDo">
			    <div>这是个todolist的demo</div>
				<Input submitFn={this.submitFn.bind(this)}/>
				<List lists={this.state.lists} deleteFn={this.deleteFn.bind(this)}/>
			    <div>这是个选择城市组件demo</div>
			    
			    <div className="mt20" onClick={this.chooseCity.bind(this)}>选择城市</div>

			    <div>你选择了：{this.state.city}</div>
			    <div>
			    {
			    this.state.showCitySelect?
				    <Mask hideMask={this.closeCity.bind(this)}>
				    	<SelectCity cityClick={this.updateCity.bind(this)}/>
				    </Mask>:''
				}
			    </div>
			</div>
		)
	}
	chooseCity(){
		this.setState({
			showCitySelect:true
		})
	}
	closeCity(){
		this.setState({
			showCitySelect:false
		})
	}
	updateCity(item){
		this.setState({
			showCitySelect:false,
			city:item
		})
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

