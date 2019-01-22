import React, { Component } from 'react';

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
						<i className={`iconfont arrow ${item.departs?'icon-arrowdropdown':''}`} onClick={self.toggle.bind(self,item)}></i>
						</span>
						<span className={`${item.departs?'':'departmentname'}`}>{item.departmentName}</span>
						{
							item.departs&&item.show?<OrganizeTree treedata={item.departs}/>:''
						}
						</div>
				  })
				}
				</div>
			</div>
		)
	}

	toggle(item){
		let that = this;
		console.log(item);
		item.show=!item.show;
		this.props.toggleTree(item)
	}
}