import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd';

import menuList from '../../../../config/adminMenuConfig'
import './leftNav.less'
import {reqAuthorityList} from '../../../../api'
import memoryUtils from '../../../../utils/memoryUtils'
/*
左侧导航的组件
 */
const { SubMenu } = Menu;
const {Sider} = Layout

export default class LeftNav extends Component{
    constructor(props){
        super(props)
        this.state = {}
        reqAuthorityList().then(data => {
            this.authorityList = data.data
            const authority = this.authorityList.find(item => item.name === memoryUtils.userdata.authority)
            if(authority){
              this.setState({menuNodes : this.getMenuNodes(menuList, authority.menus)})
            }else{
              this.setState({menuNodes : this.getMenuNodes(menuList, '')})
            }
        })
    }
    /**
     * 根据menu的数据数组生成对应标签数组
     */
    getMenuNodes = (menuList, menus='') =>{
        let newMenus = menus.split('/')
        return menuList.map(item => {
            if(newMenus.indexOf(item.key) !== -1){
                if(!item.children){
                    return(
                        <Menu.Item key={item.key} icon={<item.icon/>}>
                            <Link to={'/admin/'+item.key}>{item.title}</Link>
                        </Menu.Item>
                    )
                }else{
                    let cItem = item.children.find(cItem => cItem.key === this.props.path.split('/')[2])
                    if(cItem)this.openKey = item.key
                    return(
                        <SubMenu key={item.key} icon={<item.icon/>} title={item.title}>
                            {this.getMenuNodes(item.children, menus)}
                        </SubMenu>
                    )
                }
            }
            return null
        })
    }

    render(){
        return(
            <Sider className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <h1>云边小铺</h1>
                </Link>
                <Menu selectedKeys={[this.props.path.split('/')[2]]} defaultOpenKeys={[this.openKey]} mode="inline" theme="dark">
                    {this.state.menuNodes}
                </Menu>
            </Sider>
        )
    }
}