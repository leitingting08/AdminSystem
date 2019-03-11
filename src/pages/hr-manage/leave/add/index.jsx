import React, { Component } from 'react';
import { DatePicker } from 'antd';
import Dialog from '@/components/dialog'
import Approver from '@/components/approver'


const { RangePicker } = DatePicker;
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

export default class LeaveAdd extends React.Component {

	render(){
		return(
			<div className="LeaveAdd">
			  <div className="nav col666"><span>人事管理</span>><span className="font12">请假申请</span>><span className="font12">新增</span></div>
			  
			  <div className="bgcon clearFix">
			    <div className="input-wrap">
			      <label>请假类型：</label>
			      <select className="search-width search-select">
			        <option value="事假">事假</option>
					<option value="病假">病假</option>
					<option value="婚假">婚假</option>
		      		<option value="产假">产假</option>
					<option value="陪产假">陪产假</option>
					<option value="丧假">丧假</option>
					<option value="年假">年假</option>
					<option value="加班调休">加班调休</option>
			      </select>
			    </div>
			    <div className="input-wrap">
			      <label>请假时间：</label>
			      <RangePicker
				    showTime={{ format: 'HH:mm' }}
				    format="YYYY-MM-DD HH:mm"
				    placeholder={['Start Time', 'End Time']}
				    onChange={onChange}
				    onOk={onOk}
				   />
			      {/*<input type="text" className="input"/>
			      <span className="mid">至</span>
			      <input type="text" className="input"/>*/}
			    </div>
			    <div className="input-wrap">
			      <label>请假时长：</label>
			      <input type="text" className="input"/>
			      <span className="mid">小时</span>
			    </div>
			    <div className="input-wrap">
			      <label>请假原因：</label>
			      <textarea className="search-width search-textarea"></textarea>
			    </div>
			    <div className="input-wrap">
			      <label>添加审批人：</label>
			      <i className="iconfont icon-add1" onClick={this.addApproval.bind(this)}></i>
			    </div>    
			  </div>
			  <div className="row">
		         <button className="btn submit">提交</button>
		      </div>
			</div>
			)
	}

	addApproval(){
		Dialog.open({
		  title:'选择审批人',
	      children:[Approver],
	      props:{
	      	showValue:function(){
	      		// this._close();
	      		console.log('...dialog嵌套子组件');
	      	}
	      },
	      closeDialog:function(){
	      	console.log('guanbi');
	      }
	    })
	}

}