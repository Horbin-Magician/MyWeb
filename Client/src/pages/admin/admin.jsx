import {Component, lazy} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import LeftNav from './components/leftNav/leftNav'
import Home from './home/home'
import { checkLogin, addUpdateFun } from '../../utils/userUtils'

const Statistics = lazy(() => import('./statistics/statistics'))
const UserManage = lazy(() => import('./manages/userManage/userManage'))
const AuthorityManage = lazy(() => import('./manages/authorityManage/authorityManage'))
const BaseSetting = lazy(() => import('./settings/baseSetting'))
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