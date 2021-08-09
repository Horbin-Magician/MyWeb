import React, {Component} from 'react'
import {Modal, Tree} from 'antd'

import menuList from '../../../../../config/adminMenuConfig'
/*
管理-统计
 */
const {TreeNode} = Tree

export default class AddForm extends Component{
    constructor(props){
        super(props)
        this.state = {checkedKeys: {}}
        this.menuNodes = this.getMenuNodes(menuList)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.showStatus === 0){
            const nextMenus = nextProps.role.menus ? nextProps.role.menus.split('/') : {}
            if(nextMenus !== prevState.checkedKeys)return{checkedKeys:nextMenus}
        }
        return null
    }

    setRole = ()=>{
        let newMenus = ''
        if(this.state.checkedKeys.length)newMenus = this.state.checkedKeys.reduce(
            (result, item)=>{
                if(result === 'all')return ''
                if(item === 'all')return result
                if(result === '')return item
                return(result + '/' + item)
        })
        this.props.setRole(this.props.role.name, newMenus)
    }

    getMenuNodes = (menuList) =>{
        return menuList.map(item => {
            if(!item.children){
                return(<TreeNode title={item.title} key={item.key}></TreeNode>)
            }else{
                return(
                    <TreeNode key={item.key} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </TreeNode>
                )
            }
        })
    }

    onCheck = checkedKeys => {
        this.setState({checkedKeys})
    }

    render(){
        return(
            <Modal title='设置角色权限' visible={this.props.showStatus===2} 
            onOk={this.setRole} onCancel={()=>{this.props.setRole()}}>
                <Tree checkable defaultExpandAll={true} 
                checkedKeys={this.state.checkedKeys}
                onCheck={this.onCheck}>
                    <TreeNode title='平台权限' key='all'>
                        {this.menuNodes}
                    </TreeNode>
                </Tree>
            </Modal>
        )
    }
}