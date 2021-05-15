import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { HomeOutlined, ToolOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Menu } from 'antd';
import './header.less'
/*
头部组件
 */
const { SubMenu,Item } = Menu
class Header extends Component{
    render(){
        const url = this.props.history.location.pathname.split('/')
        const nowKey = url[url.length-1] === '' ? 'home' : url[url.length-1]
        return(
            <Menu mode="horizontal" selectedKeys={[nowKey]}>
                <Item key="home" icon={<HomeOutlined/>}><Link to={'/'}>首页</Link></Item>
                <SubMenu key="tools" title="小工具" icon={<ToolOutlined/>}>
                    <Item key="favorites"><Link to={'/tools/favorites'}>收藏夹</Link></Item>
                </SubMenu>
                <Item key="about" icon={<QuestionCircleOutlined/>}><Link to={'/about'}>关于</Link></Item>
            </Menu>
        )
    }
}
export default withRouter(Header)