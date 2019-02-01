import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './confirm.less';

let defaultState = {confirmStatus:false,title:'提示',content:'确定',btn:['确定'],yes:function(){},no:function(){}}

// 这个confirm组件的构建思想是通过创建div插入到body里面，不需要的时候去销毁它
class Confirm extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {...defaultState}
    }
 
    // 关闭弹框
  confirm(index){
    this.setState({
      confirmStatus:false
    })
    if(index==0){
        this.state.yes();
    }else if(index==1){
        this.state.no();
    }
    
  }
  open(options){
    options = options || {};
    options.confirmStatus = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }
  close(){
    this.state.no();
    this.setState({
      ...defaultState
    })
  }

    render() {
        let { tips } = this.props;
        let self = this;
        return (
            <div className="confirm" style={this.state.confirmStatus? {display:'block'}:{display:'none'}}>
                <div className="confirm-mask">
                    <div className="confirm-outter">
                        <div className="confirm-title">{this.state.title}</div>
                        <div className="confirm-wrap">{this.state.content}</div>
                        <div className="confirm-btn w100">
                        {
                            this.state.btn.map(function(item,index){
                                return <button onClick={self.confirm.bind(self,index)} className="flexitem" key={index}>{item}</button>
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

let div = document.createElement('div');
let props = {
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Confirm,
  props
),div);
export default Box;