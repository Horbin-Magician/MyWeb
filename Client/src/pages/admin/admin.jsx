import {Component} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { message, Layout, Modal} from 'antd';

import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils'
import LeftNav from './components/leftNav/leftNav'
import Header from './components/header/header'
import Home from './home/home'
import Statistics from './statistics/statistics'
import UserManage from './manages/userManage/userManage'
import AuthorityManage from './manages/authorityManage/authorityManage'
import BaseSetting from './settings/baseSetting'

/*
后台管理页的路由组件
*/ 
const {Footer, Sider, Content} = Layout

export default class Admin extends Component {
  //退出登录
  logout = () => {
    //显示确认框
    Modal.confirm({
        title: '是否确认退出？',
        content: '退出后再次进入需要重新登录',
        onOk: () => {
            //删除保存的数据
            storageUtils.removeUser()
            memoryUtils.userdata = {}
            //跳转到login
            this.props.history.replace('/login')
        },
    })
  }
  
  render() {
    const userdata = memoryUtils.userdata 
    if(!userdata || userdata.status!=='0'){
      message.error("请先的登录！")
      return <Redirect to='/login'/>
    }
    return ( 
      <Layout style={{height:"100%"}}>
        <Sider><LeftNav path={this.props.location.pathname}/></Sider>
        <Layout>
          <Header path={this.props.location.pathname} logout={this.logout} username={userdata.username}/>
          <Content style={{backgroundColor:'#fff'}}>
            <Switch>
              <Route path='/admin/home' component={Home} />
              <Route path='/admin/statistics' component={Statistics} />
              <Route path='/admin/user' component={UserManage} />
              <Route path='/admin/authority' component={AuthorityManage} />
              <Route path='/admin/base' component={BaseSetting} />
              <Redirect to='/admin/home' />
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center', color:'#ccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
     );
  }
}