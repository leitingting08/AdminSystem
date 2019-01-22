import React, { Component } from 'react';

export default class OrganizeTree extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			treedata:[]
		}
	}

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
							item.departs&&item.show?<OrganizeTree treedata={item.departs}/>:''
						}
						</div>
				  })
				}
				</div>
			</div>
		)
	}
	componentWillMount(){
		const { treedata } = this.props;
		this.setState({
			treedata: treedata
		})
	}

	toggle(item){
		item.show=!item.show;
		this.setState({
			treedata:this.state.treedata
		})
	}

	showdepart(item){
		console.log(item);
		this.props.showdepart(item)
	}
}