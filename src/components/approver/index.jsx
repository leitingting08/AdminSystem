import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InterfaceServer from '@/axios/interface'
const interfaceServer = new InterfaceServer();

export default class Approver extends Component {
	constructor(props, context){
        super(props, context)
        this.state = {
        	lists:[]
        }
    }

    render() {
    	let that = this;
        return (
            <div className="approver-list">
            	{
            		this.state.lists.length?
            		this.state.lists.map(function(item,index){
            			return <div className="txtleft" key={index} onClick={that.showValue.bind(that,item)}>{item.approvalName}（{item.roleName}）</div>
            		})
            		:<div className="txtleft">没有可选的审批人</div>
            	}
            </div>
        );
    }

    componentWillMount(){
    	this._sendApproversServer();
    }

    showValue(item){
    	this.props.showValue(item)
    }

    _sendApproversServer(){
    	interfaceServer.sendApproversServer({
    		onSuccess:res=>{
    			this.setState({
    				lists:res.data
    			})
    		}
    	})
    }
}