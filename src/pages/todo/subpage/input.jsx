import React, {Component} from 'react'

class Input extends React.Component{
	render(){
		return (
		<div className="Input">
		  <input type="text" value={this.props.val} onkeydown={this.submitList.bind(this)}/>
		</div>
		)
	}

	submitList(e){
		console.log(e.keyCode);
		if(e.KeyCode==13){

			console.log('我按了回车键');
		}
	}
}

export default Input;