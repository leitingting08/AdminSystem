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
						<i className="iconfont icon-arrowdropdown arrow" onClick={self.toggle.bind(self,item)}></i>
						{item.departmentName}
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
		that.props.toggleTree(item)
		// var toggleTree = this.props.toggleTree
		// toggleTree(item)
	}
}