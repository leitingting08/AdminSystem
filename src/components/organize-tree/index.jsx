import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as infoActions from '@/store/userinfo/action'


export default class OrganizeTree extends React.Component {

	render(){
		let self = this;
		return (
			<div className="OrganizeTree">
				<div className="left">
				{
					this.props.treedata.map(function(item,index){
						return <div className="row-li" key={index}>
						<span className={`${item.show?'':'rotate90'}`}>
						<i className={`iconfont arrow ${item.departs?'icon-arrowdropdown':''}`} onClick={self.toggle.bind(self,item,index)}></i>
						</span>
						<span className={`depart ${item.departs?'':'departmentname'}`} onClick={self.showdepart.bind(self,item)}>{item.departmentName}</span>
						{
							item.departs&&item.show?<OrganizeTree treedata={item.departs}  toggleTree={self.toggle.bind(self,item.departs[index])} showDepart={self.showdepart.bind(self,item)}/>:''
						}
						</div>
				  })
				}
				</div>
			</div>
		)
	}

	componentWillMount(){

	}

	toggle(item,index){
		this.props.toggleTree(item,index)
	}

	showdepart(item){
	    this.props.showDepart(item)
	}

}