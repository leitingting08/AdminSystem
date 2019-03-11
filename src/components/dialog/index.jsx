import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './dialog.less';

let defaultState = {
  dialogStatus:false,
  title:'提示',
  closeDialog:function(){},
  children:''
}

// 这个dialog组件的构建思想是通过创建div插入到body里面，不需要的时候去销毁它
class Dialog extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {...defaultState}
    }

  open(options){
    options = options || {};
    options.dialogStatus = true;
    var props = options.props || {};
    var children = this.renderChildren(props,options.children) || '';
    this.setState({
      ...defaultState,
      ...options,
      children
    })
  }

  

  renderChildren(props,children){
    let childs = [];
    children = children || [];
    // let _this = this;
    let ps = {
      ...props, // 给子组件绑定props
      _close:this.colseMask // 给子组件也绑定一个关闭弹窗的事件
    }
    children.forEach(function(item,index){
      childs.push(React.createElement(
        item,
        {
          ...ps,
          key:index
        }
      ))
    })
    return childs;
  }

  colseMask(){
    this.state.options.dialogStatus = false;
    this.setState({
      ...defaultState
    })
  }

  close(){ // 点击遮罩关闭弹框
    this.state.closeDialog();
    this.setState({
      ...defaultState
    })
  }

  prevent(e){
    e.stopPropagation()
  }

    render() {
        let { tips } = this.props;
        let self = this;
        return (
            <div className="dialog" style={this.state.dialogStatus? {display:'block'}:{display:'none'}}>
                <div className="dialog-mask" onClick={self.close.bind(self)}>
                    <div className="dialog-outter" onClick={self.prevent.bind(self)}>
                        <div className="dialog-title clearFix"><span className="fl font15">{this.state.title}</span> <i className="fr iconfont icon-guanbi font14" onClick={self.close.bind(self)}></i></div>
                        <div className="dialog-wrap">{this.state.children}</div>
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
  Dialog,
  props
),div);
export default Box;