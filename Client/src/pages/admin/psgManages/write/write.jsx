import React, { Component } from 'react'
import { Row, Col, Input, Select, Button, DatePicker, Space, InputNumber, Form, message } from 'antd'
import ReactMarkdown from 'react-markdown'

import './write.less'


/*
写作台
 */
const { Option } = Select
const { TextArea } = Input
export default class BaseSetting extends Component {
  constructor(props){
    super(props)
    this.state = {
      introduce : "",
      content : ""
    }
    this.formRef = React.createRef()
    this.introduceHtml = React.createRef()
    this.contentHtml = React.createRef()
  }
  onIntroduceChange = (v)=>{
    this.setState({introduce:v.target.value})
    this.introduceHtml.current.scrollTop = this.introduceHtml.current.scrollTopMax
  }
  onContentChange = (v)=>{
    this.setState({content:v.target.value})
    this.contentHtml.current.scrollTop = this.contentHtml.current.scrollTopMax
  }
  render() {
    // if(this.formRef.current){
    //   this.formRef.current.validateFields().then(values => {
    //     // this.formRef.current.resetFields()
    //     // this.updatePasType(values.ID, values.name, values.rank)
    //     this.formRef.current.setFieldsValue({ ID: 2 })
    //     console.log(values)
    //   })
    //   .catch(info => message.error('请正确填写信息！' + info));
    // }

    const { introduce, content } = this.state
    return (
      <div className="write">
        <Row>
          <Space>
            <Button className="write-option" type="primary">暂存文章</Button>
            <Button className="write-option" type="primary">发布文章</Button>
          </Space>
        </Row>
        <Form ref={this.formRef}>
          <Row justify="space-between">
            <Col>
              <Form.Item name='ID'>
                <InputNumber min={1} defaultValue={1} size="large" />
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item name='title'>
                <Input placeholder="文章标题" size="large" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item name='date'>
                <DatePicker placeholder="日期" size="large"/>
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item name='type'>
                <Select defaultValue="1" size="large" className="passage-type">
                  <Option value="1">视频教程</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={12}>
              <Form.Item name='introduce'>
                <TextArea className="markdown-introduce" rows={5} onChange={this.onIntroduceChange} 
                placeholder="文章介绍" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <div className="show-html show-introduce-html" ref={this.introduceHtml}>
                <ReactMarkdown>{introduce}</ReactMarkdown>
              </div>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={12}>
              <Form.Item name='content'>
                <TextArea className="markdown-content" rows={22} onChange={this.onContentChange} 
                placeholder="文章内容"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <div className="show-html show-content-html" ref={this.contentHtml}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}