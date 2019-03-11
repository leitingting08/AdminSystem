import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Approver extends Component {
	constructor(props, context){
        super(props, context)
    }

    render() {
        return (
            <div className="approver-list">
                <div onClick={this.showValue.bind(this)}>1111111111111</div>
            </div>
        );
    }

    showValue(){
    	this.props.showValue && this.props.showValue()
    }
}