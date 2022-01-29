import {Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import LeftNav from './components/leftNav/leftNav'
import Home from './home/home'
import Statistics from './statistics/statistics'
import UserManage from './baseManages/userManage/userManage'
import AuthorityManage from './baseManages/authorityManage/authorityManage'
import BaseSetting from './settings/baseSetting'
import { checkLogin, addUpdateFun } from '../../utils/userUtils'


/*
后台管理页的路由组件
*/ 
const {Content} = Layout

export default class Admin extends Component {
  constructor(props){
    super(props)
    addUpdateFun(()=>this.forceUpdate())
  }
  render() {
    if(!checkLogin()){
      return <Redirect to='/'/>
    }
    return (
      <Layout style={{height:document.body.clientHeight}}>
        <LeftNav path={this.props.location.pathname}/>
        <Layout>
          <Content style={{backgroundColor:'#fff'}} >
            <Switch>
              <Route path='/admin/home' component={Home} />
              <Route path='/admin/statistics' component={Statistics} />
              <Route path='/admin/user' component={UserManage} />
              <Route path='/admin/authority' component={AuthorityManage} />
              <Route path='/admin/base' component={BaseSetting} />
              <Redirect to='/admin/home' />
            </Switch>
          </Content>
        </Layout>
      </Layout>
     );
  }
}