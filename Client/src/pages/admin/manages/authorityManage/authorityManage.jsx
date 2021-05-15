import React, {Component} from 'react'
import {Card, Button, Table, message} from 'antd'

import AddForm from './components/addForm'
import SetForm from './components/setForm'
import {reqAuthorityList, reqUpdateAuthority, reqDelAuthority} from '../../../../api'

/*
管理-统计
 */
export default class UserManage extends Component{
    state = {
        role: {}, //选中的role
        showStatus:0, //显示状态，0不显示modal,1显示添加modal，2显示设置modal
    }

    componentDidMount(){
        this.updateRoles()
    }

    updateRoles = () => {
        reqAuthorityList().then(data =>{
            this.setState({roles:data.data})
        })
    }

    updateRole = (name, menus='') =>{
        if(name){
            reqUpdateAuthority(name, menus).then(data =>{
                if(data.status === '0'){
                    message.success('更新角色成功！')
                    this.updateRoles()
                }
                else message.error('更新角色失败！')
            })
            this.setState({role:{}})
        }
        this.setState({showStatus:0})
    }

    delRole = () =>{
        reqDelAuthority(this.state.role.name).then(data =>{
            if(data.status === '0'){
                message.success('删除角色成功！')
                this.updateRoles()
            }
            else message.error('删除角色失败！')
        })
        this.setState({role:{}})
    }

    onRow = (role) => {
        return{
            onClick: event =>{
                this.setState({role})
            }
        }
    }

    columns = [{title:'角色名称',dataIndex:'name'},{title:'拥有权限',dataIndex:'menus'},]
    
    render(){
        const {roles, role, showStatus} = this.state
        const title=(
            <span style={{lineHeight:"48px"}}>
                <Button type='primary' onClick={()=>{this.setState({showStatus:1})}}>
                    创建角色
                </Button> &nbsp;
                <Button type='primary' onClick={this.delRole} disabled={!role.name}>
                    删除角色
                </Button> &nbsp;
                <Button type='primary' onClick={()=>{this.setState({showStatus:2})}} disabled={!role.name}>
                    设置角色权限
                </Button>
            </span>
        )
        return(
            <Card title={title}>
                <Table bordered
                    rowKey='name'
                    dataSource={roles}
                    columns={this.columns}
                    rowSelection={{type: 'radio', selectedRowKeys: [role.name]}}
                    onRow={this.onRow}
                />
                <AddForm showStatus={showStatus} addRole={(name)=>{this.updateRole(name)}}/>
                <SetForm showStatus={showStatus} role={this.state.role} setRole={(name, menus)=>{this.updateRole(name, menus)}}/>
            </Card>
        )
    }
}