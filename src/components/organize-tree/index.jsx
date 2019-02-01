import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as infoActions from '@/store/userinfo/action'


class OrganizeTree extends React.Component {
	// constructor(props,context){
	// 	super(props,context)
	// 	this.state = {
	// 		treedata:[],
	// 	}
	// }

	render(){
		let self = this;
		return (
			<div className="OrganizeTree">
				<div className="left">
				{
					this.props.treedata.map(function(item,index){
						return <div className="row-li" key={index}>
						<span className={`${item.show?'':'rotate90'}`}>
						<i className={`iconfont arrow ${item.departs?'icon-arrowdropdown':''}`} onClick={self.toggle.bind(self,item)}></i>
						</span>
						<span className={`depart ${item.departs?'':'departmentname'}`} onClick={self.showdepart.bind(self,item)}>{item.departmentName}</span>
						{
							item.departs&&item.show?<OrganizeTree treedata={item.departs}  toggleTree={self.toggle.bind(self,item)} showDepart={self.showdepart.bind(self,item)}/>:''
						}
						</div>
				  })
				}
				</div>
			</div>
		)
	}

	toggle(item){
		this.props.toggleTree(item)
	}

	showdepart(item){
	    this.props.showDepart(item)
	}

}

export default OrganizeTree