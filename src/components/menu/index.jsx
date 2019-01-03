import React, { Component } from 'react';

export default class Menu extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      menus:[
      {name:'首页',icon:'',show:true},
      {name:'人事管理',icon:'',show:true,
      childmenu:[
        {name:'员工档案',link:'',show:true},
        {name:'请假申请',link:'',show:true},
        {name:'招聘申请',link:'',show:true},
        {name:'转正申请',link:'',show:true},
        {name:'离职申请',link:'',show:true},
      ]},
      {name:'行政管理',icon:'',show:false},
      {name:'组织架构',icon:'',show:true},
      {name:'系统管理',icon:'',show:true},
      ]
    }
  }

  render() {
    return (
      <div className="Menu">
        <ul>
          {
	          this.state.menus.map(function(item,index){
	          	return <li key={index} className={item.show?'':'hide'}>{item.name}</li>
	          })
          }
        </ul>
      </div>
    )
  }
}