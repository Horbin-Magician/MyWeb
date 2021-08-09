import React, {Component} from 'react'
import {Card, Button, Table, message} from 'antd'

import AddForm from './components/addForm'
import SetForm from './components/setForm'
import {reqUserList, reqDelUser, reqUpdateUser} from '../../../../api/baseAPI'


/*
管理-统计
 */
export default class UserManage extends Component{
    state = {
        user: {}, //选中的role
        showStatus:0, //显示状态，0不显示modal,1显示添加modal，2显示设置modal
    }

    componentDidMount(){
        this.updateUsers()
    }

    updateUsers = () => reqUserList().then(data => this.setState({users:data.data}))

    updateUser = (username, password, authority) =>{
        if(username){
            reqUpdateUser(username, password, authority).then(data =>{
                if(data.status === '0'){
                    message.success('更新用户成功！')
                    this.updateUsers()
                }
                else message.error('更新用户失败！')
            })
            this.setState({user:{}})
        }
        this.setState({showStatus:0})
    }

    delUser = () => {
        reqDelUser(this.state.user.username).then(data =>{
            if(data.status === '0'){
                message.success('删除用户成功！')
                this.updateUsers()
            }
            else message.error('删除用户失败！')
        })
        this.setState({user:{}})
    }

    onRow = (user) => {
        return{
            onClick: event =>this.setState({user})
        }
    }

    columns = [{title:'用户名',dataIndex:'username'}, {title:'密码',dataIndex:'password'}, {title:'所属角色',dataIndex:'authority'},]

    render(){
        const {users, user, showStatus} = this.state
        const title=(
            <span  style={{lineHeight:"48px"}}>
                <Button type='primary' onClick={()=>{this.setState({showStatus:1})}}>
                    创建用户
                </Button> &nbsp;
                <Button type='primary' onClick={this.delUser} disabled={!user.username}>
                    删除用户
                </Button> &nbsp;
                <Button type='primary' onClick={()=>{this.setState({showStatus:2})}} disabled={!user.username}>
                    编辑角色
                </Button>
            </span>
        )
        return(
            <Card title={title}>
                <Table bordered
                    rowKey='username'
                    dataSource={users}
                    columns={this.columns}
                    rowSelection={{type: 'radio', selectedRowKeys: [user.username]}}
                    onRow={this.onRow}
                />
                <AddForm showStatus={showStatus} addUser={(username, password, authority)=>{this.updateUser(username, password, authority)}}/>
                <SetForm showStatus={showStatus} user={this.state.user} setUser={(username, password, authority)=>{this.updateUser(username, password, authority)}}/>
            </Card>
        )
    }
}