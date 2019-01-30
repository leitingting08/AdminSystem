import React, { Component } from 'react';
import InterfaceServer from '../../axios/interface'
const interfaceServer = new InterfaceServer();
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as infoActions from '../../store/userinfo/action'
import {resetOrganizeINFO} from '../../store/userinfo/action'

export default class TableTree extends React.Component {

	render(){
		let self = this;
		return (
			<div className="TableTree">
				{
					this.props.treedata.map(function(item,index){
						return <div className="" key={index}>
						<div className="flex">
						<div className="w30 td">
						{/*icon-552cd47fba2cc*/}
							{/*<span className={`${item.dirCheck[0]?'':'rotate90'}`}>*/}
							<i className={`iconfont mr10 arrow ${item.menuChild?'icon-wenjian':'icon-552cd47fba2cc ml20'}`} onClick={self.toggle.bind(self,item)}></i>
							{/*</span>*/}
							{item.menuName}
						</div>
						<div className="w70 td txtleft pl20 brderleft0">
						{/*{
						   item.dirCheck.map(function(i,d){
						   	  return <input type="checkbox" checked={i}/>
						   })
						}*/}
						{
						   item.perName.map(function(subitem,subindex){
						   	  return <label key={subindex}><input type="checkbox" value={subitem.name} onChange={self.changeHandler.bind(self,subitem)}/><span className="mr20">{subitem.name}</span></label>
						   })
						}
						</div>
						</div>
						{/*<span className={`${item.dirCheck[0]?'':'rotate90'}`}>
						<i className={`iconfont arrow ${item.menuChild?'icon-arrowdropdown':''}`} onClick={self.toggle.bind(self,item)}></i>
						</span>
						<span className={`depart ${item.menuChild?'':'departmentname'}`} onClick={self.showdepart.bind(self,item)}>{item.departmentName}</span>
						*/}
						{
							item.menuChild?<TableTree treedata={item.menuChild}/>:''
						}
						</div>
				  })
				}
			</div>
		)
	}
	componentWillMount(){

	}
	toggle(item){
		console.log(item);
	}
	changeHandler(item){
		// item.checked = !item.checked
		console.log(item);
		// this.props.onChangeCheckbox(item)
	}

}
