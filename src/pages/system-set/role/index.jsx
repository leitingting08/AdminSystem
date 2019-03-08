import React, { Component } from 'react';
import TableTree from '@/components/table-tree'

export default class Authorize extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			treedata:[
			    {menuName: '公告管理',show:true,  perName: [{name:'全部',checked:false}], menuChild: [
			        {menuName: '公告管理',show:false, perName: [{name:'全部',checked:false},{name:'查看',checked:false},{name:'发布',checked:false}]}
			      ]
			    },
			    {menuName: '人事管理', show:true, perName: [{name:'全部',checked:false}], menuChild: [
			        {menuName: '员工档案', show:false, perName: [{name:'全部',checked:false},{name:'查看',checked:false},{name:'编辑',checked:false}]},
			        {menuName: '请假申请', show:false, perName: [{name:'全部',checked:false},{name:'申请',checked:false},{name:'查看',checked:false},{name:'审批',checked:false}]}
			      ]
			    }
			]
		}
	}

	render(){
		return(
			<div className="Authorize">
			  <div className="nav col666"><span>系统管理</span>><span className="font12">权限设置</span>><span>角色权限</span></div>
			  <div className="bgcon">
			  	<div className="input-wrap">
			      <label>角色名称：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap">
			      <label>管理范围：</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>仅个人</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>全公司</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>所在部门及其下级部门</label>
			      <label className="forlabel"><input type="radio" name="range" className="input radio"/>特定部门</label>
			    </div>
			    <div className="input-wrap">
			      <label>权限范围：</label>
			      <label className="forlabel">
				      <input type="checkbox" className="input checkbox"/>
				      <span>全部权限（包括查看、审批管理、申请等权限）</span>
				  </label>
			    </div>
			  	<div className="table">
					    <div className="flex">
					      <div className="w30 th">功能</div>
					      <div className="w70 th">权限</div>
					    </div>
					    {
					    	this.state.treedata.length
					    	?
					    	<TableTree treedata={this.state.treedata} toggleClick={this.toggle.bind(this)} chooseClick={this.onChangeCheckbox.bind(this)}/>
					    	:<div>暂无数据</div>
					    }
				  </div>
			  </div>
			</div>
			)
	}

	toggle(item){
		if(!item.menuChild[0].show){
			item.menuChild.forEach(i=>{
				i.show = true
			})
		}else{
			item.menuChild.forEach(i=>{
				i.show = false
			})
		}
		this.setState({
			treedata:this.state.treedata
		})
	}

	onChangeCheckbox(item,subindex,index,type){
		if(item.menuName){ // 点击的是全选
			item.perName[0].checked = !item.perName[0].checked
			if(item.menuChild){
				let flag = item.perName[0].checked;
				item.menuChild.forEach(m=>{
					m.perName.forEach(n=>{
						n.checked = flag
					})
				})
			}else{
				let flag2 = item.perName[0].checked;
				item.perName.forEach(i=>{i.checked = flag2;})
			}
		}else{
			item.checked=!item.checked
		}
		
		console.log(item);
		console.log(subindex);
		console.log(index);
		console.log(type);
		this.setState({
			treedata:this.state.treedata
		})
	}
}