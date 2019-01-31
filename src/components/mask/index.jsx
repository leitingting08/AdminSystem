import React, {Component} from 'react'
import './mask.less'

export default class Mask extends React.Component{
	
	render(){
		return (
		<div className="Mask" onClick={this.props.hideMask}>
			<div className="Content flex">
			  <span className="Block" onClick={this.stop.bind(this)}>
			  {this.props.children}
			  </span>
			</div>
		</div>
		)
	}
	stop(e){
		e.stopPropagation();
	}
}