import React, { Component } from 'react';
import InterfaceServer from '../../axios/interface'
const interfaceServer = new InterfaceServer();
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as infoActions from '../../store/userinfo/action'


class OrganizeTree extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			treedata:[],
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
		const { treedata,departmentName} = this.props;
		this.setState({
			treedata: treedata,
			departmentName:departmentName
		})
	}

	toggle(item){
		item.show=!item.show;
		this.setState({
			treedata:this.state.treedata
		})
	}

	showdepart(item){
		console.log(item.departmentName);
		this._sendShowemployeeServer({departmentName:item.departmentName})
	}

	_sendShowemployeeServer(param){
		interfaceServer.sendShowemployeeServer({
			data:param,
			onSuccess:res=>{
				console.log(res.data);
				// 保存到redux里--这里为啥存不进去
				this.props.organizeInfoActions.resetOrganizeINFO(organizeInfo,res.data)
			}
		})
	}

}

function mapStateToProps(state){
	return {
		organizeInfo: state.organizeInfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		organizeInfoActions: bindActionCreators(infoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrganizeTree)