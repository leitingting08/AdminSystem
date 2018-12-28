import React, {Component} from 'react'

export default class List extends React.Component{
	deleteLi(id){
		let that = this;
		console.log(id);
		that.props.deleteFn(id)
	}
	render(){
		return (
		<div className="lists">
		  <ul>
		    {
		    	this.props.lists.length===0
		        ?<li>暂无数据</li>
		    	:this.props.lists.map(function(item,index){
		    		return <li key={index} onClick={()=>this.deleteLi(index)}>{item.text}</li>
		    	})
		    }
		  </ul>
		</div>
		)
	}

	
}