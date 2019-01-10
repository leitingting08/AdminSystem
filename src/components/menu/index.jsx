import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import SubItem from './subitem'

export default class Menu extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      menus:[
      {name:'首页',icon:'icon-shouye',show:true,link:'/home'},
      {name:'公告管理',icon:'icon-gonggao',show:true,link:'/app/noticelist'},
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
	          this.state.menus.map(function(item,index){
	          	return <li key={index} className={item.show?'':'hide'} 
              onClick={self.linktosonpage.bind(self,item)}>
              {/*<NavLink to={item.link}>*/}
              <i className={`iconfont ${item.icon}`}></i>{item.name}<i className={`youjiantou ${item.submenu?'iconfont icon-youjiantou':''}`}></i>
              {/*</NavLink>*/}
              {item.submenu
              ?<SubItem items={item.submenu} />:''
              }
	               {/*{
                    item.submenu.map(function(subitem,subindex){
                      return <div key={subindex}>{subitem.name}</div>
                   })
                 }*/}

              </li>
            })
          }
        </ul>
      </div>
    )
  }

  linktosonpage(item){
    console.log(this.context);
    // this.context.router.push({ pathname:item.link })
    // this.props.history.push('home')
    // this.context.router.history.push('/app/noticelist');
    // let that = this;
    // if(item.link){
    //   console.log(item.link)
    //   const link = item.link
    //   this.props.history.goBack()
    //   // that.props.history.replace({pathname:link})
    // }
  }
}