import React, { Component } from 'react';
import InterfaceServer from '../../../axios/interface'
const interfaceServer = new InterfaceServer();

export default class NoticeList extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			filelists:[]
		}
	}

  render() {
    return (
      <div className="NoticeList">
        <div className="nav col666"><span>公告管理</span>><span className="font12">公告列表</span><button className="btn ml20" onClick={this.addFiles.bind(this)}>新增</button></div>
			  <div className="bgcon clearFix">
			    <div className="input-wrap fl">
			      <label>日期：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap fl">
			      <label>发布者：</label>
			      <input type="text" className="input"/>
			    </div>
			    <div className="input-wrap fl">
			  		<button className="btn">查询</button>
			  	</div>
			  </div>

			  <div className="flex bgcon">
			    <table className="table" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
				    <thead>
				    <tr>
				      <th>公告标题</th>
				      <th>创建人</th>
				      <th>创建时间</th>
				      <th>接收人</th>
				    </tr>
				    </thead>
				    <tbody>
				    {
				    	this.state.filelists.length
				    	?
				    	this.state.filelists.map(function(item,index){
				    		return <tr key={index}>
				    		<td><a className="linka">{item.title}</a></td>
				    		<td>{item.createName}</td>
				    		<td>{item.creatTime}</td>
				    		<td>{item.receiveName}</td>
				    		</tr>
				    	})
				    	:<tr><td colSpan="3">暂无数据</td></tr>
				    }
				    </tbody>
			    </table>
			  </div>
      </div>
    )
  }
  componentWillMount(){
		this._sendNoticelistServer()
	}

	_sendNoticelistServer(){
		interfaceServer.sendNoticelistServer({
			// data,
			onSuccess:res=>{
				console.log(res)
				this.setState({
					filelists:res.data.lists
				})
			}
		})
	}

	addFiles(){
		location.replace('#/noticelist/add')
	}
}