import React, { Component } from 'react'
import { Card, Button, Table, message, Modal, Form, Input } from 'antd'

import { reqPasTypeList, reqDelPasType, reqUpdatePasType } from '../../../../api/passagesAPI'


/*
文章管理-文章类别
 */
export default class psgTypeMng extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: {}, //选中的type
      showStatus: 0, //显示状态，0不显示modal,1显示添加modal，2显示设置modal
    }
    this.formRef = React.createRef()
  }

  componentDidMount() {
    this.updateTypeList()
  }

  componentDidUpdate() {
    if (this.formRef.current) {
      if (this.state.showStatus === 2) {
        this.formRef.current.setFieldsValue(this.state.type)
      }
    }
  }

  updateTypeList = () => reqPasTypeList().then(data => this.setState({ typeList: data.data }))

  updatePasType = (ID, name, rank) => {
    reqUpdatePasType(ID, name, rank).then(data => {
      if (data.status === '0') {
        message.success('更新文章类别成功！')
        this.updateTypeList()
      }
      else message.error('更新文章类别失败！')
    })
    this.setState({ type: {}, showStatus: 0 })
  }

  onModalOK = () => {
    this.formRef.current.validateFields().then(values => {
      this.formRef.current.resetFields()
      this.updatePasType(values.ID, values.name, values.rank)
    })
      .catch(info => message.error('请正确填写信息！' + info));
  }

  delPasType = () => {
    reqDelPasType(this.state.type.ID).then(data => {
      if (data.status === '0') {
        message.success('删除类别成功！')
        this.updateTypeList()
      }
      else message.error('删除类别失败！')
    })
    this.setState({ user: {} })
  }

  onRow = (type) => {
    return {
      onClick: event => this.setState({ type })
    }
  }

  columns = [{ title: 'ID', dataIndex: 'ID' }, { title: '次序', dataIndex: 'rank' }, { title: '名称', dataIndex: 'name' },]

  render() {
    const { typeList, type, showStatus } = this.state
    const title = (
      <span style={{ lineHeight: "48px" }}>
        <Button type='primary' onClick={() => { this.setState({ showStatus: 1 }) }}>
          创建类别
        </Button> &nbsp;
        <Button type='primary' onClick={this.delPasType} disabled={!type.ID}>
          删除类别
        </Button> &nbsp;
        <Button type='primary' onClick={() => { this.setState({ showStatus: 2 }) }} disabled={!type.ID}>
          编辑类别
        </Button>
      </span>
    )
    return (
      <Card title={title}>
        <Table bordered
          rowKey='ID'
          dataSource={typeList}
          columns={this.columns}
          rowSelection={{ type: 'radio', selectedRowKeys: [type.ID] }}
          onRow={this.onRow}
        />
        <Modal title='添加用户' visible={showStatus > 0}
          onOk={this.onModalOK} onCancel={() => { this.setState({ showStatus: 0 }) }}
        >
          <Form ref={this.formRef}>
            <Form.Item name="ID">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item name="name"
              rules={[
                { required: true, message: '请输入类别名称！' },
              ]}
            >
              <Input placeholder="类别名称" />
            </Form.Item>
            <Form.Item name="rank"
              rules={[
                { required: true, message: '请输入排序等级！' },
                { pattern: /^[0-9]+$/, message: '排序等级必须由数字组成' },
              ]}
            >
              <Input placeholder="排序等级" />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    )
  }
}