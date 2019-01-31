import React, {Component} from 'react'

export default class SelectCity extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			citylists:['杭州','上海','武汉','深圳','北京','南京']
		}
	}

	render(){
		let self = this;
		return (
		<div className="SelectCity">
		  {
		  	this.state.citylists.map(function(item,index){
		  		return <span key={index} className="p10" onClick={self.cityClick.bind(self,item)}>{item}</span>
		  	})
		  }
		</div>
		)
	}

	cityClick(item){
		this.props.cityClick(item)
	}
	
}