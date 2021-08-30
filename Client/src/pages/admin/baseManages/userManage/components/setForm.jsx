import React, { Component } from 'react'
import { Modal, Form, Input, Select, message } from 'antd'

import { reqAuthorityList } from '../../../../../api/baseAPI'
/*
管理-统计
 */
const { Option } = Select;

export default class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    reqAuthorityList().then(data => {
      this.setState({ options: this.getOptions(data.data) })
    })
  }

  formRef = React.createRef()

  setUser = () => {
    this.formRef.current.validateFields().then(values => {
      this.formRef.current.resetFields()
      if (!values.password) values.password = ''
      this.props.setUser(values.username, values.password, values.authority)
    })
      .catch(info => message.error('请正确填写信息！' + info));
  }

  getOptions = (authorityList) => {
    return authorityList.map(item => {
      return <Option key={item.name} value={item.name}>{item.name}</Option>
    })
  }

  componentDidUpdate() {
    if (this.formRef.current) {
      this.formRef.current.resetFields()
      this.formRef.current.setFieldsValue({ username: this.props.user.username })
      this.formRef.current.setFieldsValue({ authority: this.props.user.authority })
    }
  }

  render() {
    return (
      <Modal title='添加用户' visible={this.props.showStatus === 2}
        onOk={this.setUser} onCancel={() => { this.props.setUser() }}
      >
        <Form ref={this.formRef}>
          <Form.Item name="username">
            <Input disabled={true} />
          </Form.Item>
          <Form.Item name="password"
            rules={[
              { min: 6, message: '密码最少6位' },
              { max: 16, message: '密码最多16位' },
              { pattern: /^[a-zA-z0-9_*!]+$/, message: '密码必须由英文、数字或英文字符_*!组成' },
            ]}
          >
            <Input type="password" placeholder="密码默认不修改" />
          </Form.Item>
          <Form.Item name="authority">
            <Select>{this.state.options}</Select>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}