import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '@/less/index.less'
import { Button } from 'antd';
 
export default class Home extends React.Component {
   constructor(props, context){
      super(props,context)
      this.state = {
        cssColor:'',
        lessColor:'',
        antdColor:''
      }
    }
   render() {
      return (
          <div className="Home">
            <div className="welcome">您好，欢迎使用 XXX 后台管理系统</div>
              {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
              {/*<Link to={{ pathname: '/', search: '?name=homename', state: { mold: 'add' },aa:'dddd' }} className="home-link">shouye</Link>*/}
             <div>我是用css变量设置的主题色：<span className="colorBlock css"></span>输入色值<input type="text" placeholder="请输入颜色值" onChange={this.changeColors.bind(this,'css')}/><span className="btn css" onClick={this.confirmChange.bind(this,'css')}>点击换色</span></div>
             <div>我是用less变量设置的主题色：<span className="colorBlock less"></span>输入色值<input type="text" placeholder="请输入颜色值" onChange={this.changeColors.bind(this,'less')}/><span className="btn less" onClick={this.confirmChange.bind(this,'less')}>点击换色</span></div>
             <div>我是用antd自带的主题色：输入色值<input type="text" placeholder="请输入颜色值" onChange={this.changeColors.bind(this,'antd')}/><Button type="primary" className="ml20" onClick={this.confirmChange.bind(this,'antd')}>点击换色</Button></div>
          </div>
      );
   }
   changeColors(type,e){
      console.log(type,e.target.value)
      let val = e.target.value;
      if(type==='css'){
         this.setState({
            cssColor:val
         })
      }
      if(type==='less'){
         this.setState({
            lessColor:val
         })
      }
      if(type==='antd'){
         this.setState({
            antdColor:val
         })
      }
   }
   confirmChange(type){
      if(type==='css'){
         document.body.style.setProperty('--primary', this.state.cssColor)
      }
      if(type==='less'){
         window.less.modifyVars({  // 调用 `less.modifyVars` 方法来改变变量值
                         '@primary': this.state.lessColor
                     })
                     .then(() => {
                         console.log('修改成功');
                     });
      }
      if(type==='antd'){
         window.less.modifyVars({  // 调用 `less.modifyVars` 方法来改变变量值
                         '@primary-color': this.state.antdColor
                     })
                     .then(() => {
                         console.log('修改成功');
                     });
      }
   }
}