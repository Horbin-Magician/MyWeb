import React, { Component } from 'react'
import { Row, Col, Input, Select, Button, DatePicker, Space, InputNumber } from 'antd'
import ReactMarkdown from 'react-markdown'

import './write.less'


/*
管理-设置
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
    const { introduce, content } = this.state
    return (
      <div className="write">
        <Row justify="space-between">
          <Col>
            <InputNumber min={1} defaultValue={1} size="large" />
          </Col>
          <Col span={18}>
            <Input placeholder="文章标题" size="large" />
          </Col>
          <Col span={2}>
            <DatePicker placeholder="日期" size="large"/>
          </Col>
          <Col span={2}>
            <Select defaultValue="1" size="large" className="passage-type">
              <Option value="1">视频教程</Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Space>
            <Button className="write-option" type="primary">暂存文章</Button>
            <Button className="write-option" type="primary">发布文章</Button>
          </Space>
        </Row>
        <Row justify="space-between">
          <Col span={12}>
            <TextArea className="markdown-introduce" rows={5} onChange={this.onIntroduceChange} placeholder="文章介绍" />
          </Col>
          <Col span={12}>
            <div className="show-html show-introduce-html" ref={this.introduceHtml}><ReactMarkdown>{introduce}</ReactMarkdown></div>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={12}>
            <TextArea className="markdown-content" rows={22} onChange={this.onContentChange} placeholder="文章内容"/>
          </Col>
          <Col span={12}>
            <div className="show-html show-content-html" ref={this.contentHtml}><ReactMarkdown>{content}</ReactMarkdown></div>
          </Col>
        </Row>
      </div>
    )
  }
}