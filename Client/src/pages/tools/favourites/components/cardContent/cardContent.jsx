import React, { Component } from 'react'
import { Row, Col, Button, Modal, Form, Input, Rate, message, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

import FavouritesCard from '../favCard/favCard'
import { reqUpdateItem, reqFavTypeList } from '../../../../../api'
import { checkLogin,addUpdateFun } from '../../../../../utils/userUtils'

/*
左侧导航的组件
 */
const { Option } = Select;

export default class CardContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      showStatus: 0,
    }
    this.formRef = React.createRef()
    this.oldUrl = ''
    addUpdateFun(()=>this.forceUpdate())
  }

  //根据itemList获取card节点
  getCardNodes = (itemList) => {
    return itemList.map(item => {
      return (
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}
         key={item.url}>
          <FavouritesCard url={item.url} title={item.title} iconUrl={item.iconUrl}
            description={item.description} type={item.type} rank={item.rank}
            update={this.props.update} onEdit={this.onEdit} />
        </Col>
      )
    })
  }
  //更新item
  updateItem = () => {
    this.formRef.current.validateFields().then(values => {
      const { url, title, description, type, rank, iconUrl } = values
      reqUpdateItem(url, type, title, rank, iconUrl, description, this.oldUrl).then(data => {
        if (data.status === '0') {
          this.props.update()
          this.afterUpdate()
          message.success('更新成功！')
        }
      })
    }).catch(info => message.error('请正确填写信息！'));
  }
  //更新item后的收尾工作
  afterUpdate = () => {
    this.setState({ showStatus: 0 })
    this.formRef.current.resetFields();
    this.oldUrl = ''
  }
  //开始编辑item
  onEdit = (url, title, description, type, rank, iconUrl) => {
    this.oldUrl = url
    reqFavTypeList().then(data => {
      //获取并设置typeOptions
      let typeOptions = data.data.map(item => {
        return <Option key={item.title} value={item.title}>{item.title}</Option>
      })
      //初始化其他信息
      this.formRef.current.setFieldsValue({ url, title, description, type, rank, iconUrl })
      this.setState({ typeOptions: typeOptions, showStatus: 1 })
    })
  }

  render() {
    const { itemList } = this.props
    const cardNodes = this.getCardNodes(itemList)
    return (
      <div>
        <Row gutter={[{ xs: 8, sm: 16, md: 16, lg: 24 },{ xs: 8, sm: 16, md: 16, lg: 24 }]} >
          {cardNodes}
          <div style={checkLogin() ? { display: 'block' } : { display: 'none' }}>
            <Button icon={<PlusOutlined style={{ fontSize: '50px', color: '#C0C0C0' }} />}
              style={{ height: '180px', width: '180px' }}
              onClick={() => { this.onEdit('', '', '', this.props.favType, 3) }} />
          </div>
        </Row>
        <Modal forceRender title='收藏项信息' visible={this.state.showStatus === 1}
          onOk={() => { this.updateItem() }} onCancel={this.afterUpdate}>
          <Form ref={this.formRef}>
            <Form.Item name="url"
              rules={[{ required: true, message: '请输入URL' },]}>
              <Input placeholder="请输入URL" />
            </Form.Item>
            <Form.Item name="title"
              rules={[{ required: true, message: '请输入标题' },]}>
              <Input placeholder="请输入标题" />
            </Form.Item>
            <Form.Item name="description"
              rules={[{ required: true, message: '请输入相关描述' },]}>
              <Input placeholder="请输入相关描述" />
            </Form.Item>
            <Form.Item name="iconUrl">
              <Input placeholder="请输入IconURL，可为空" />
            </Form.Item>
            <Form.Item name="type">
              <Select>{this.state.typeOptions}</Select>
            </Form.Item>
            <Form.Item name="rank">
              <Rate style={{ margin: 'auto 0' }} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}