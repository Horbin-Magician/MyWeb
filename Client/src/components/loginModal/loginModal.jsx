import {Component} from 'react'
import {Form, Input, Button, message, Modal} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

/*
登录页的路由组件
*/ 
export default class LoginModal extends Component {
  onFinish = async (values) => {
    const {username, password} = values
    const data = await reqLogin(username, password)
    if(data && data.status === '0'){//登入成功
      message.success('登录成功，欢迎回来～')
      memoryUtils.userdata = data
      storageUtils.saveUser(data)
    }else{//账号或密码错误
      message.error('登录失败，账号或密码错误！')
    }
  };

  render() {
    //判断是否已经登录
    const userdata = memoryUtils.userdata 
    if(userdata && userdata.status === '0' && this.props.showLogin){
      message.info('已经登录，请勿重复登录！')
      this.props.switchShow()
    }
    return (
        <Modal title='用户登录'
        visible={this.props.showLogin} onCancel={this.props.switchShow}
        footer={null}>
            <Form name="normal_login" footer={null}
            initialValues={{}}
            onFinish={this.onFinish}>
                <Form.Item name="username"
                rules={[
                    {required: true,message: '请输入用户名'},
                    {min: 4,message: '用户名最少4位'},
                    {max: 12,message: '用户名最多12位'},
                    {pattern: /^[a-zA-z0-9_*!]+$/,message: '用户名必须由英文、数字或英文字符_*!组成'},
                ]}>
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item name="password"
                rules={[
                    {required: true,message: '请输入密码！'},
                    {min: 6,message: '密码最少6位'},
                    {max: 16,message: '密码最多16位'},
                    {pattern: /^[a-zA-z0-9_*!]+$/,message: '密码必须由英文、数字或英文字符_*!组成'},
                ]}>
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码"/>
                </Form.Item>
                <Form.Item>
                  <Button style={{width:'100%'}} type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </Modal>
     );
  }
}