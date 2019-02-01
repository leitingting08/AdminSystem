import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './alert.less';

let defaultState = {alertStatus:false,title:'提示',content:'确定',btn:['确定'],yes:function(){},no:function(){}}

// 这个alert组件的构建思想是通过创建div插入到body里面，不需要的时候去销毁它
class Alert extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {...defaultState}
    }
 
    // 关闭弹框
  confirm(index){
    this.setState({
      alertStatus:false
    })
    if(index==0){
        this.state.yes();
    }else if(index==1){
        this.state.no();
    }
    
  }
  open(options){
    options = options || {};
    options.alertStatus = true;
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
            <div className="alert" style={this.state.alertStatus? {display:'block'}:{display:'none'}}>
                <div className="alert-mask">
                    <div className="alert-outter">
                        <div className="alert-title">{this.state.title}</div>
                        <div className="alert-wrap">{this.state.content}</div>
                        <div className="alert-btn w100">
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
  Alert,
  props
),div);
export default Box;