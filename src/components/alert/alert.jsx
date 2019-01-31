import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './alert.less';

let defaultTips = {title:'提示',content:'确定',btn:['确定'],yes:function(){},no:function(){}}

// 这个alert组件的构建思想是通过创建div插入到body里面，不需要的时候去销毁它
export default class Alert extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {...defaultTips}
    }

    render() {
        let { tips } = this.props;
        let self = this;
        return (
            <div className="alert">
                <div className="alert-mask">
                    <div className="alert-outter">
                        <div className="alert-title">{tips.title}</div>
                        <div className="alert-wrap">
                            {tips.content}
                        </div>
                        <div className="alert-btn w100">
                        {
                            tips.btn.map(function(item,index){
                                return <button onClick={self.clickBtn.bind(self,index)} className="flexitem" key={index}>{item}</button>
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    clickBtn(index){
        if(index==0){ // 确定
            this.props.tips.yes(0);
        }
        if(index==1){ // 取消
            this.props.tips.no(1);
        }
    }
}

Alert.propTypes = {
    tips: PropTypes.object
};

Alert.newInstance = function newNotificationInstance(properties) {
    let props = properties || {};
    let div = document.createElement('div');
    document.body.appendChild(div);
    let notification = ReactDOM.render(React.createElement(Alert, props), div);
    return {
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
};