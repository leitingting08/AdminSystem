import React, {Component} from 'react'

export default class List extends React.Component{
	
	render(){
		let self = this;
		return (
		<div className="lists">
		  <ul>
		    {
		    	this.props.lists.length===0
		        ?<li>暂无数据</li>
		    	:this.props.lists.map(function(item,index){
		    		return <li key={index} onClick={self.clickHander.bind(self,item)}>{item.text}</li>
		    	})
		    }
		  </ul>
		</div>
		)
	}

	clickHander(item){
		let that = this;
		that.props.deleteFn(item.id)
	}
	
}