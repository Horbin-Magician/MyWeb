import React, {Component} from 'react'
import { Button} from 'antd'

import menuList from '../../../../config/adminMenuConfig'
import './header.less'
/*
头部组件
 */
export default class Header extends Component{
    //获取当前需要显示的Title
    getTitle = (menuList)=>{
        const key = this.props.path.split('/')[2]
        let title
        menuList.forEach(item => {
            if(item.key === key){
                title = item.title
            }else if(item.children){
                const cTitle = this.getTitle(item.children)
                if(cTitle)title = cTitle
            }
        })
        return title
    }

    render(){
        const title = this.getTitle(menuList)
        return(
            <div className='header'>
                <div className='header-title'>{title}</div>
                <div className='header-user'>
                    <span>欢迎，{this.props.username}</span>
                    <Button type="link" onClick={this.props.logout}>退出</Button>
                </div>
            </div>
        )
    }
}