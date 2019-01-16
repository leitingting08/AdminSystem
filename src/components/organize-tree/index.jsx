import React, { Component } from 'react';

export default class OrganizeTree extends React.Component {
	
	render(){
		return (
			<div className="OrganizeTree">
				<div className="left-tree">
					<div className="search-wrapper">
						<input type="text" className="input search" placeholder="请输入部门名称"/>
						<i className="iconfont icon-sousuo"></i>
					</div>
				{
					this.props.treedata.map(function(item,index){
						return <div className="row-li" key={index}>{item.departmentName}</div>
						item.departs?<OrganizeTree treedata={item.departs}/>:<div></div>
					})
				}
				</div>
			</div>
		)
	}
}