import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Home extends React.Component {
   render() {
      return (
          <div className="Home">
            <div className="welcome">柠檬，你好，欢迎使用NINGMENG 后台管理系统</div>
              {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
              {/*<Link to={{ pathname: '/', search: '?name=homename', state: { mold: 'add' },aa:'dddd' }} className="home-link">shouye</Link>*/}
          </div>
      );
   }
}
 
export default Home;