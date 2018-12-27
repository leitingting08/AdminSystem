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
			<Input submitFn={this.submitFn.bind(this)}/>
			<List lists={this.state.list} deleteFn={this.deleteFn.bind(this)}/>
			</div>
		)
	}
	submitFn(value){
		const id = this.state.list.length;
		console.log(id)
		this.setState({
			list: this.state.list.concat({
				id: id,
				text: value
			})
		})
	}
	deleteFn(id){
		let data = this.state.list;
		this.setState({
			list: data.filter(item=>{
				if(item.id!==id){
					return item
				}
			})
		})
	}
} 

export default ToDo;