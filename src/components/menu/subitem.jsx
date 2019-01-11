import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SubItem extends React.Component  {

	render(){
		return(
			<div className="SubItem" className={this.props.isshow?'':'hide'}>
			  {
			  	this.props.items.map(function(i,subindex){
			  		return <div className="item" key={subindex}>
			  		<Link to={i.link}>{i.name}</Link>
			  		</div>
			  	})
			  }
			</div>
			)
	}
}