import React, { Component } from 'react';
import List from './subpage/list';
import { Link } from 'react-router-dom'
import Alert from '@/components/alert'
import axios from '../../axios/axios';
import { Button } from 'antd';


class Header extends React.Component {
 
  constructor(props, context){
    super(props,context)
    this.state = {
      showul:false,
      showtoggletheme:false,
    }
  }
  render() {
    return (
      <div className="Header">
      {this.state.showul||this.state.showtoggletheme?
        <div className="bgbody" onClick={this.hideName.bind(this)}></div>:''
      }
        <div className="title flex">
	        <div className="w50 txtleft">
          <span className="font16">{this.props.title}</span>
          </div>
	        <div className="w50 txtright pr20">
          <i className="iconfont icon-xinxi mr20"></i>
             <span className="username" onClick={this.clickUserName.bind(this)}>{this.props.username}
             <i className={`iconfont mr20 font30 ${this.state.showul?'icon-arrow-up-2':'icon-arrowdropdown'}`}></i>
             </span>
          </div>
          <ul className={`opeartion ${this.state.showul?'show':'hide'}`}>
            <span className="trangle"></span>
            <li><Link to={`/hrmanage/employeefiles/detail`}><i className="iconfont icon-yonghu2"></i>查看档案</Link></li>
            <li><div onClick={this.editpass.bind(this)}><i className="iconfont icon-xiugaimima"></i>修改密码</div></li>
            <li><div onClick={this.logout.bind(this)}><i className="iconfont icon-tuichu"></i>退出</div></li>
          </ul>
        </div>
      </div>
    )
  }

  changeColors(e){
    const color = e.target.value;
    console.log(color)
    if (color.match(/^#[a-f0-9]{3,6}$/i)) {
      const vars = this.state.vars;
      this.setState({ vars });
    }
  }

  handleColorChange(){
    window.less.modifyVars(this.state.vars).then(() => {
      console.log('Theme updated successfully');
    });
  }

  toggleTheme(){
    this.setState({
      showtoggletheme:!this.state.showtoggletheme
    })
  }
  clickUserName(){
    this.setState({
      showul:!this.state.showul
    })
  }
  hideName(){
    this.setState({
      showul:false
    })
  }
  editpass(){

  }
  logout(){
    Alert.open({
      content:'确认退出?',
      btn:['确定','取消'],
      yes:function(){
        console.log('确定');
        localStorage.removeItem('USERINFO')
        location.replace('#/login')
      },no:function(i){
        console.log('取消');
      }
    })
  }
}

export default Header;