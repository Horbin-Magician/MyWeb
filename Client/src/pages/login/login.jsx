import {Component} from 'react'
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

/*
登录页的路由组件
*/ 
export default class Login extends Component {
  onFinish = async (values) => {
    const {username, password} = values
    const data = await reqLogin(username, password)
    if(data && data.status === '0'){//登入成功
      message.success('登录成功，欢迎回来～')
      memoryUtils.userdata = data
      storageUtils.saveUser(data)
      this.props.history.replace('/admin')
    }else{//账号或密码错误
      message.error('登录失败，账号或密码错误！')
    }
  };
  render() {
    //判断是否登录,若已登录，重定向到管理界面
    const userdata = memoryUtils.userdata 
    if(userdata && userdata.status === '0'){
      return <Redirect to='/admin'/>
    }
    return ( 
      <div className="login">
        <section className='login-content'>
          <h2>用户登录</h2>
          <Form name="normal_login" className="login-form"
            initialValues={{}}
            onFinish={this.onFinish}
          >
            <Form.Item name="username"
              rules={[
                {required: true,message: '请输入用户名'},
                {min: 4,message: '用户名最少4位'},
                {max: 12,message: '用户名最多12位'},
                {pattern: /^[a-zA-z0-9_*!]+$/,message: '用户名必须由英文、数字或英文字符_*!组成'},
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item name="password"
              rules={[
                {required: true,message: '请输入密码！'},
                {min: 6,message: '密码最少6位'},
                {max: 16,message: '密码最多16位'},
                {pattern: /^[a-zA-z0-9_*!]+$/,message: '密码必须由英文、数字或英文字符_*!组成'},
              ]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
          </Form>
        </section>
      </div>
     );
  }
}