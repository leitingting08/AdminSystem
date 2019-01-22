import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SubItem extends React.Component  {

	render(){
		let self = this;
		return(
			<div className="SubItem" className={this.props.isshow?'':'hide'}>
			  {
			  	this.props.items.map(function(i,subindex){
			  		return <div className="item" key={subindex} onClick={self.stoppropgation.bind(self)}>
			  		<Link to={i.link}>{i.name}</Link>
			  		</div>
			  	})
			  }
			</div>
			)
	}

	stoppropgation(e){
		console.log(e);
	    e.stopPropagation();
	}
}