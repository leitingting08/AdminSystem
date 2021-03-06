import React, { Component } from 'react';
import InterfaceServer from '../../../axios/interface'
const interfaceServer = new InterfaceServer();
import { Pagination, Button } from 'antd';

export default class NoticeList extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			filelists:[],
			current:1
		}
	}

  render() {
    return (
      <div className="NoticeList">
        <div className="nav col666"><span>公告管理</span>><span className="font12">公告列表</span><Button type="primary" className="ml20" onClick={this.addFiles.bind(this)}>新增</Button></div>
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
			  		<Button type="primary">查询</Button>
			  	</div>
			  </div>

			  <div className="bgcon">
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
				    		<td><Button type="link">{item.title}</Button></td>
				    		<td>{item.createName}</td>
				    		<td>{item.creatTime}</td>
				    		<td>{item.receiveName}</td>
				    		</tr>
				    	})
				    	:<tr><td colSpan="3">暂无数据</td></tr>
				    }
				    </tbody>
			    </table>
			    <div className="txtleft mt20">
			    	<Pagination defaultCurrent={this.state.current} total={10} onChange={this.onChange.bind(this)}/>
			  	</div>
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

	onChange(page){
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	}
}