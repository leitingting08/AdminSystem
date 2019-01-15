import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import App from '../pages/App'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export default class Auth extends React.Component{
      render(){
          const { location,config } = this.props;
          const { pathname } = location;
          const isLogin = localStorage.getItem('USERINFO')
          // console.log(isLogin);
          console.log(store.getState());
          // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
          const targetRouterConfig = config.find((v) => v.path === pathname);
          if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
              const { component } = targetRouterConfig;
              return <Route exact path={pathname} component={component} />
          }

          if(isLogin){ 
              // 如果是登陆状态，想要跳转到登陆
              if(pathname === '/login'){
                  return <Route exact path='/login' component={Login}/>
              }else{
                  // 如果路由合法，就跳转到相应的路由
                  if(targetRouterConfig&&pathname!=='/404'){
                      return <App><Route path={pathname} component={targetRouterConfig.component} /></App>
                  }else if(pathname === '/404'){
                      return <Route exact path='/404' component={NotFound}/>
                  }else{
                    // 如果路由不合法，重定向到 404 页面
                     return <Redirect to='/404' />
                  }
              }
          }else{
            // 非登陆状态下，重定向到登陆页
            return <Redirect to='/login' />
          }
      }
  }