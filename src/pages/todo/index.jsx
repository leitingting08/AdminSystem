import React, {Component} from 'react'
import Input from './subpage/input'
import List from './subpage/list'
import SelectCity from './subpage/selectCity'
import { Tree } from 'antd';
const { TreeNode } = Tree
import Toast from '@/components/toast'
import Alert from '@/components/alert'

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
			    <div>1. 这是个todolist的demo</div>
				<Input submitFn={this.submitFn.bind(this)}/>
				<List lists={this.state.lists} deleteFn={this.deleteFn.bind(this)}/>
			    <div>2. 这是个选择城市组件demo</div>
			    
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
			    <br/>

			    <div>3. 这是个toast组件demo</div>
			    <button className="mr20" onClick={() => { Toast.info('普通提示',1000) }}>普通提示</button>
			    <button className="mr20" onClick={() => { Toast.success('加载完成',1000) }}>加载完成</button>
			    <button className="mr20" onClick={() => { Toast.error('错误',1000) }}>错误</button>
			    <button className="mr20" onClick={() => { Toast.loading('加载中') }}>加载中</button>
			    <button className="mr20" onClick={this.loadCallback.bind(this)}>加载中--回调</button>
			    <br/>

			    <div>4. 这是个confirm组件demo</div>
			    <button className="mr20" onClick={this.alertCallback.bind(this)}>alert</button>
			    <button className="mr20" onClick={this.confirmCallback.bind(this)}>confirm</button>

			</div>
		)
	}
	alertCallback(){
		Alert.open({
	      title:'提示',
	      content:'确认退出?',
	      btn:['确定'],
	      yes:function(){
	        console.log('确定');
	      },no:function(){
	        console.log('取消');
	      }
	   })
	}
	confirmCallback(){
		Alert.open({
	      title:'提示',
	      content:'确认退出?',
	      btn:['确定','取消'],
	      yes:function(){
	        console.log('确定');
	      },no:function(){
	        console.log('取消');
	      }
	   })
	}
	loadCallback(){
		const hideLoading = Toast.loading('加载中...', 0, () => {
		  Toast.success('加载完成')
		})
		setTimeout(hideLoading, 2000)
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

