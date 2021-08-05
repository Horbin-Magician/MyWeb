import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { HomeOutlined, ToolOutlined, QuestionCircleOutlined, UserOutlined, MenuOutlined, FileTextOutlined } from '@ant-design/icons'
import { Menu, Row, Col, Button, Modal, Affix, Dropdown } from 'antd';

import LoginModal from '../loginModal/loginModal'
import { userlogout, checkLogin, addUpdateFun } from '../../utils/userUtils'
import './header.less'
/*
头部组件
 */
const { SubMenu, Item } = Menu
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {showLogin: false,}
    addUpdateFun(()=>this.forceUpdate())
  }

  onUserMenuClick = ({key}) => {
    if(key === 'logout'){
      Modal.confirm({
        title: '是否确认注销？',
        onOk: ()=>userlogout(),//注销
      })
    }else if(key === 'manage'){
      this.props.history.push('/admin')
    }
  }

  switchLoginShow = () => this.setState({ showLogin: !this.state.showLogin, })

  render() {
    const userMenu = (
      <Menu onClick={this.onUserMenuClick}>
        <Menu.Item key="manage">管理</Menu.Item>
        <Menu.Item key="logout">注销</Menu.Item>
      </Menu>
    )
    //根据url获取nowKey
    const url = this.props.history.location.pathname.split('/')
    if(url[1] === 'admin')return null;//若为管理界面，隐藏header
    let nowKey = url[url.length - 1] === '' ? 'home' : url[url.length - 1]
    if(nowKey === 'detailed') nowKey = 'passages'
    // 判断是否已经登录
    let userBtn = null
    if(checkLogin()){
      userBtn = (
        <Dropdown overlay={userMenu} trigger={['click']} placement="bottomCenter" arrow>
          <Button type="primary" shape='circle'><MenuOutlined /></Button>
        </Dropdown>
      )
    }else{
      userBtn = <Button type="primary" shape='circle' onClick={this.switchLoginShow}><UserOutlined /></Button>
    }
    // 渲染页面
    return (
      <Affix offsetTop={0}>
        <Row className='header' align='middle' justify="center">
          <Col>
            <Menu className='header-menu' mode="horizontal" selectedKeys={[nowKey]}>
              <Item key="home" icon={<HomeOutlined />}>
                <Link to={'/'}>源初</Link>
              </Item>
              <Item key="passages" icon={<FileTextOutlined />}>
                <Link to={'/passages'}>夕拾</Link>
              </Item>
              <SubMenu key="tools" title="机巧" icon={<ToolOutlined />}>
                <Item key="favorites">
                  <Link to={'/tools/favorites'}>收藏夹</Link>
                </Item>
              </SubMenu>
              <Item key="about" icon={<QuestionCircleOutlined />}>
                <Link to={'/about'}>始末</Link>
              </Item>
            </Menu>
          </Col>
          <Col>{userBtn}</Col>
          <LoginModal switchShow={this.switchLoginShow} showLogin={this.state.showLogin} />
        </Row>
      </Affix>
    )
  }
}
export default withRouter(Header)