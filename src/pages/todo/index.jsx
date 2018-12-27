import React, {Component} from 'react'
import Input from './subpage/input'
import List from './subpage/list'

class ToDo extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			list:[]
		}
	}
	render(){
		return (
			<div className="ToDo">
			<Input/>
			<List lists={this.state.list}/>
			</div>
		)
	}
} 

export default ToDo;