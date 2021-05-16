import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HomeOutlined, ToolOutlined, QuestionCircleOutlined, UserOutlined} from '@ant-design/icons'
import {Menu, Row, Col, Button} from 'antd';

import LoginModal from '../loginModal/loginModal'
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
        this.switchLoginShow()
    }

    switchLoginShow = ()=>this.setState({showLogin:!this.state.showLogin,})

    render(){
        //根据url获取nowKey
        const url = this.props.history.location.pathname.split('/')
        const nowKey = url[url.length-1] === '' ? 'home' : url[url.length-1]
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
                        <UserOutlined />
                    </Button>
                </Col>
                <LoginModal switchShow={this.switchLoginShow} showLogin={this.state.showLogin}/>
            </Row>
        )
    }
}
export default withRouter(Header)