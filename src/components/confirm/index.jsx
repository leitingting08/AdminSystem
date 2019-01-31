import React, { Component } from 'react';

let defaultTips = {title:'提示',content:'确定',btn:['确定'],yes:function(){},no:function(){}}

// 这个Confirm组件的构建思想是通过创建div插入到body里面，不需要的时候去销毁它
export default class Confirm extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {...defaultTips}
    }

    render() {
        let { tips } = this.props;
        let self = this;
        return (
            <div className="Confirm">
                <div className="Confirm-mask">
                    <div className="Confirm-outter">
                        <div className="Confirm-title">{tips.title}</div>
                        <div className="Confirm-wrap">
                            {tips.content}
                        </div>
                        <div className="Confirm-btn w100">
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
            this.props.tips.yes();
        }
        if(index==1){ // 取消
            this.props.tips.no();
        }
    }
}