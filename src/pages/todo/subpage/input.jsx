import React, {Component} from 'react'

class Input extends React.Component{
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
		this.setState({value:e.target.value})
	}
	submitList(e){
		let value = this.state.value.trim();
		if(e.KeyCode===13&&value){
			console.log('我按了回车键');
			this.props.submitFn(value)
			this.setState({value:''})
		}
	}
}

export default Input;