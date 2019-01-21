import React, { Component } from 'react';

export default class OrganizeTree extends React.Component {
	
	render(){
		return (
			<div className="OrganizeTree">
				<div className="left">
				{
					this.props.treedata.map(function(item,index){
						return <div className="row-li" key={index}>
						<i className="iconfont icon-arrowdropdown arrow"></i>
						{item.departmentName}
						{
							item.departs?<OrganizeTree treedata={item.departs}/>:''
						}
						</div>
				  })
				}
				</div>
			</div>
		)
	}
}