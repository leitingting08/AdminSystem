import React, {Component} from 'react'
import Input from './subpage/input'
import List from './subpage/list'

export default class ToDo extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			lists:[]
		}
	}
	render(){
		return (
			<div className="ToDo">
			<Input submitFn={this.submitFn.bind(this)}/>
			<List lists={this.state.lists} deleteFn={this.deleteFn.bind(this)}/>
			</div>
		)
	}
	submitFn(value){
		let that = this;
		const id = that.state.lists.length;
		that.setState({
			lists: that.state.lists.concat({
				id: id,
				text: value
			})
		})
	}
	deleteFn(id){
		let that = this;
		let data = that.state.lists;
		that.setState({
			lists: data.filter(item=>{
				if(item.id!==id){
					return item
				}
			})
		})
	}
} 

