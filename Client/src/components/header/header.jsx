import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HomeOutlined, ToolOutlined, QuestionCircleOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons'
import {Menu, Row, Col, Button, Modal} from 'antd';

import LoginModal from '../loginModal/loginModal'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import './header.less'
/*
头部组件
 */
const {SubMenu,Item} = Menu
class Header extends Component{
    state = {
        showLogin:false,
    }

    onUserClick = ()=>{
        if(memoryUtils.userdata.username){
            //退出登录
            Modal.confirm({
                title: '是否确认退出？',
                onOk: () => {
                    //删除保存的数据
                    storageUtils.removeUser()
                    memoryUtils.userdata = {}
                },
            })
        }
        if(!memoryUtils.userdata.username)
            this.switchLoginShow()
    }

    switchLoginShow = ()=>this.setState({showLogin:!this.state.showLogin,})

    render(){
        //根据url获取nowKey
        const url = this.props.history.location.pathname.split('/')
        const nowKey = url[url.length-1] === '' ? 'home' : url[url.length-1]
        //判断是否已经登录
        let userIcon = <UserOutlined />
        if(memoryUtils.userdata.username){
            userIcon = <MenuOutlined />
        }
        return(
            <Row className='header'>
                <Col>
                    <Menu className='header-menu' mode="horizontal" selectedKeys={[nowKey]}>
                        <Item key="home" icon={<HomeOutlined/>}>
                            <Link to={'/'}>首页</Link>
                        </Item>
                        <SubMenu key="tools" title="小工具" icon={<ToolOutlined/>}>
                            <Item key="favorites">
                                <Link to={'/tools/favorites'}>收藏夹</Link>
                            </Item>
                        </SubMenu>
                        <Item key="about" icon={<QuestionCircleOutlined/>}>
                            <Link to={'/about'}>关于</Link>
                        </Item>
                    </Menu>
                </Col>
                <Col>
                    <Button type="primary" shape='circle' onClick={this.onUserClick}>
                        {userIcon}
                    </Button>
                </Col>
                <LoginModal switchShow={this.switchLoginShow} showLogin={this.state.showLogin}/>
            </Row>
        )
    }
}
export default withRouter(Header)