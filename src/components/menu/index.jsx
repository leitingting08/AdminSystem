import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import SubItem from './subitem'

export default class Menu extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      menus:[
      {name:'首页',icon:'icon-shouye',show:true,link:'/'},
      {name:'公告管理',icon:'icon-gonggao',show:true,link:'/noticelist'},
      {name:'人事管理',icon:'icon-yonghu2',show:true,link:'',
      submenu:[
        {name:'员工档案',link:'/hrmanage/employeefiles',show:true},
        {name:'请假申请',link:'/hrmanage/leave',show:true},
        // {name:'招聘申请',link:'',show:true},
        // {name:'转正申请',link:'',show:true},
        // {name:'离职申请',link:'',show:true},
      ]},
    //   {name:'行政管理',icon:'icon-552cd47fba2cc',show:true,link:'',
    //   submenu:[
    //     // {name:'用印申请',link:'',show:true},
    //     // {name:'采购申请',link:'',show:true},
    //     // {name:'会议室预约',link:'',show:true},
    //     // {name:'资料申请',link:'',show:true},
    //   ]
    // },
      {name:'组织架构',icon:'icon-zuzhi1',show:true,link:'/organization'},
      {name:'系统管理',icon:'icon-xitong2',show:true,link:'',
      submenu:[
        {name:'权限设置',link:'/systemset/authorize',show:true},
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
	          self.state.menus.map(function(item,index){
	          	return <li key={index}
              onClick={self.linktosonpage.bind(self,item,index)}>
              <i className={`iconfont ${item.icon}`}></i>{item.name}<i className={`youjiantou ${item.submenu?'iconfont icon-youjiantou':''} ${item.show?'rotate':''}`}></i>
              {item.submenu
              ?<SubItem isshow={item.show} items={item.submenu} />:''
              }
              </li>
            })
          }
        </ul>
      </div>
    )
  }

  linktosonpage(item,index){
    if(item.link){
      location.replace(`#${item.link}`);
      // this.props.history.push(item.link) // 用这个报错Cannot read property 'push' of undefined
    }else{
      let that = this;
      let data = that.state.menus;
      data[index].show = !data[index].show
      that.setState({
        menus:data
      })
    }
  }

  
}