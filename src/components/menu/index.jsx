import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Menu extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      menus:[
      {name:'首页',icon:'icon-shouye',show:true,link:'/home'},
      {name:'公告管理',icon:'icon-gonggao',show:true,link:'/app/noticelist'},
      {name:'人事管理',icon:'icon-yonghu2',show:true,
      submenu:[
        {name:'员工档案',link:'',show:true},
        {name:'请假申请',link:'',show:true},
        {name:'招聘申请',link:'',show:true},
        {name:'转正申请',link:'',show:true},
        {name:'离职申请',link:'',show:true},
      ]},
      {name:'行政管理',icon:'icon-552cd47fba2cc',show:true,
      submenu:[
        {name:'用印申请',link:'',show:true},
        {name:'采购申请',link:'',show:true},
        {name:'会议室预约',link:'',show:true},
        {name:'资料申请',link:'',show:true},
      ]
    },
      {name:'组织架构',icon:'icon-zuzhi1',show:true},
      {name:'系统管理',icon:'icon-xitong2',show:true,
      submenu:[
        {name:'权限设置',link:'',show:true},
      ]
    },
      ]
    }
  }

  render() {
    let self = this;
    return (
      <div className="Menu">
        <ul>
          {
	          this.state.menus.map(function(item,index){
	          	return <li key={index} className={item.show?'':'hide'} 
              onClick={self.linktosonpage.bind(self,item)}>
              <i className={`iconfont ${item.icon}`}></i>{item.name}<i className={`youjiantou ${item.submenu?'iconfont icon-youjiantou':''}`}></i>
              </li>
	               {/*{
                    item.submenu.map(function(subitem,subindex){
                      return <div key={subindex}>{subitem.name}</div>
                   })
                 }*/}
            })
          }
        </ul>
      </div>
    )
  }
  linktosonpage(item){
    console.log(this);
    let that = this;
    if(item.link){
      console.log(item.link)
      const link = item.link
      this.props.history.goBack()
      // that.props.history.replace({pathname:link})
    }
  }
}