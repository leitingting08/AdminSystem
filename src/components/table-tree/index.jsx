import React, { Component } from 'react';
import InterfaceServer from '@/axios/interface'
const interfaceServer = new InterfaceServer();
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as infoActions from '@/store/userinfo/action'
import {resetOrganizeINFO} from '@/store/userinfo/action'

export default class TableTree extends React.Component {

	render(){
		let self = this;
		return (
			<div className="TableTree">
				{
					this.props.treedata.map(function(item,index){
						return <div key={index} className={`flex ${item.show?'show':'hide'}`}>
						<div className="flex">
						<div className="w30 td">
							<i className={`iconfont mr10 arrow ${item.menuChild?'icon-wenjian':'icon-552cd47fba2cc ml20'}`} onClick={self.toggle.bind(self,item)}></i>
							{item.menuName}
						</div>
						<div className="w70 td txtleft pl20 brderleft0">
						{
						   item.perName.map(function(subitem,subindex){
						   	  return <label key={subindex}>
						   	  {subitem.name==='全部'?
						   	  <input type="checkbox" value={subitem.name} checked={subitem.checked} onChange={self.changeHandler.bind(self,item,index)}/>
						   	  :<input type="checkbox" value={subitem.name} checked={subitem.checked} onChange={self.changeHandler.bind(self,subitem,index)}/>
						   	}
						   	  
						   	  <span className="mr20">{subitem.name}</span></label>
						   })

						}
						</div>
						</div>
						{
							item.menuChild?<TableTree treedata={item.menuChild} chooseClick={self.changeHandler.bind(self)}/>:''
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
		this.props.toggleClick(item)
	}
	changeHandler(item,index){
		this.props.chooseClick(item,index)
	}

}
