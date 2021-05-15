import React, {Component} from 'react'
import {Modal, Form, Input, message} from 'antd'
/*
管理-统计
 */
export default class AddForm extends Component{
    formRef = React.createRef()

    addRole = ()=>{
        this.formRef.current.validateFields()
        .then(values => {
            this.formRef.current.resetFields();
            this.props.addRole(values.name)
        })
        .catch(info => {
          message.error('请正确填写信息！')
        });
    }


    render(){
        return(
            <Modal title='添加角色' visible={this.props.showStatus===1} 
                onOk={this.addRole} onCancel={()=>{this.props.addRole()}}
            >
                <Form ref={this.formRef}>
                    <Form.Item name="name"
                        rules={[
                            {required: true,message: '请输入角色名'},
                            {max: 12,message: '角色名最多12位'},
                    ]}>
                        <Input placeholder="角色名" />
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}