import React, {Component} from 'react'
import {Modal, Form, Input, Select,message} from 'antd'

import {reqAuthorityList} from '../../../../../api/baseAPI'
/*
管理-统计
 */
const { Option } = Select;

export default class AddForm extends Component{
    constructor(props){
        super(props)
        this.state = {}
        reqAuthorityList().then(data => {
            this.setState({options : this.getOptions(data.data)})
        })
    }

    formRef = React.createRef()

    addUser = ()=>{
        this.formRef.current.validateFields().then(values => {
            this.formRef.current.resetFields();
            this.props.addUser(values.username, values.password, values.authority)
        })
        .catch(info => message.error('请正确填写信息！'));
    }

    getOptions = (authorityList) =>{
        return authorityList.map(item => {
            return <Option key={item.name} value={item.name}>{item.name}</Option>
        })
    }

    render(){
        return(
            <Modal title='添加用户' visible={this.props.showStatus===1} 
                onOk={this.addUser} onCancel={()=>{this.props.addUser()}}
            >
                <Form ref={this.formRef}>
                    <Form.Item name="username"
                    rules={[
                        {required: true,message: '请输入用户名'},
                        {min: 4,message: '用户名最少4位'},
                        {max: 12,message: '用户名最多12位'},
                        {pattern: /^[a-zA-z0-9_*!]+$/,message: '用户名必须由英文、数字或英文字符_*!组成'},
                    ]}
                    >
                        <Input placeholder="用户名" />
                    </Form.Item>
                    <Form.Item name="password"
                    rules={[
                        {required: true,message: '请输入密码！'},
                        {min: 6,message: '密码最少6位'},
                        {max: 16,message: '密码最多16位'},
                        {pattern: /^[a-zA-z0-9_*!]+$/,message: '密码必须由英文、数字或英文字符_*!组成'},
                    ]}
                    >
                        <Input type="password" placeholder="密码"/>
                    </Form.Item>
                    <Form.Item name="authority" initialValue='root'>
                        <Select>{this.state.options}</Select>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}