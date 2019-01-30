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
						return <div className="flex" key={index}>
						<div className="w30 td">
							<span className={`${item.dirCheck[0]?'':'rotate90'}`}>
							<i className={`iconfont arrow ${item.menuChild?'icon-arrowdropdown':''}`} onClick={self.toggle.bind(self,item)}></i>
							</span>{item.menuName}
						</div>
						<div className="w70 td">
						{
						   item.perName.map(function(subitem,subindex){
						   	  return <span key={subindex}>{subitem}</span>
						   })
						}
						</div>
						{/*<span className={`${item.dirCheck[0]?'':'rotate90'}`}>
						<i className={`iconfont arrow ${item.menuChild?'icon-arrowdropdown':''}`} onClick={self.toggle.bind(self,item)}></i>
						</span>
						<span className={`depart ${item.menuChild?'':'departmentname'}`} onClick={self.showdepart.bind(self,item)}>{item.departmentName}</span>
						{
							item.menuChild?<TableTree treedata={item.menuChild}/>:''
						}*/}
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

}
