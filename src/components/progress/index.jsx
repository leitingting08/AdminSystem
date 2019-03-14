import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './progress.less'

let defaultState = {show:false}
class Progress extends Component {
  constructor(props, context){
        super(props, context)
        this.state = {...defaultState}
    }

  start(){
    this.setState({
      show:true
    })
  }

  done(){
    this.setState({
      show:false
    })
  }
  render(){
    return (
      <div className="myprogress" style={this.state.show? {display:'block'}:{display:'none'}}>
        <div className="bar">
          <div className="peg"></div>
        </div>
        <div className="spinner">
          <div className="spinner-icon"></div>
        </div>
      </div>
      )
  }

}

let div = document.createElement('div');
let props = {
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Progress,
  props
),div);
export default Box;