import React, {Component} from 'react'

class List extends React.Component{
	render(){
		return (
		<div className="List">
		  <ul>
		    {
		    	this.props.lists.length===0
		        ?<li>暂无数据</li>
		    	:this.props.lists.map(function(item,index){
		    		return <li>{item}</li>
		    	})
		    }
		  </ul>
		</div>
		)
	}
}

export default List;