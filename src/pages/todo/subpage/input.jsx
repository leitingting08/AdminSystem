import React, {Component} from 'react'

export default class Input extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			value:''
		}
	}
	render(){
		return (
		<div className="Input">
		  <input type="text" 
		  value={this.state.value} 
		  onChange={this.changeList.bind(this)} 
		  onKeyUp={this.submitList.bind(this)}/>
		</div>
		)
	}
	changeList(e){
		// 实时同步数据
		let that = this;
		that.setState({value:e.target.value})
	}
	submitList(e){
		let that = this;
		let value = that.state.value.trim();
		var keyCode = (window.event) ? e.which : e.keyCode;
		if(keyCode===13&&value){
			that.props.submitFn(value)
			that.setState({value:''})
		}
	}
}

