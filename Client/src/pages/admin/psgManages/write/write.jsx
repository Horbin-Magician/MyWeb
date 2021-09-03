import React, { Component } from 'react'
import moment from 'moment'
import { Row, Col, Input, Select, Button, DatePicker, Space, InputNumber, Form, message } from 'antd'
import ReactMarkdown from 'react-markdown'

import { reqPasTypeList, reqPasArticleDetail } from '../../../../api/passagesAPI'

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
      typeList : [],
      introduce : "",
      content : "",
    }
    this.formRef = React.createRef()
    this.introduceHtml = React.createRef()
    this.contentHtml = React.createRef()
  }

  componentDidMount(){
    reqPasTypeList().then(data => {
      this.setState({typeList:data.data})
    })
    reqPasArticleDetail(this.props.match.params.id).then(data => {
      let fieldsValue = data.data[0]
      fieldsValue['time'] = moment(fieldsValue['time'], 'YYYY年MM月DD日')
      this.formRef.current.setFieldsValue(data.data[0])
      this.onFormValuesChange(data.data[0])
    })
  }

  updateArticle = ()=>{
    this.formRef.current.validateFields().then(values => {
      let updateData = values
      updateData.time = updateData.time.format('YYYY年MM月DD日')
      console.log(updateData.time)
      // this.formRef.current.resetFields()
      // this.updatePasType(values.ID, values.name, values.rank)
      // this.formRef.current.setFieldsValue({ ID: 2 })
      // console.log(values)
    })
    .catch(info => message.error('请正确填写内容！' + info));
  }

  onFormValuesChange = (v) => {
    console.log(v)
    if(v.introduce){
      this.setState({introduce:v.introduce})
      this.introduceHtml.current.scrollTop = this.introduceHtml.current.scrollTopMax
    }
    if(v.content){
      this.setState({content:v.content})
      this.contentHtml.current.scrollTop = this.contentHtml.current.scrollTopMax
    }
  }

  getTypeOptions = (typeList) => {
    return typeList.map(item => {
      return <Option value={item.ID} key={item.ID}>{item.name}</Option>
    })
  }

  render() {
    const { introduce, content, typeList } = this.state

    const typeOptions = this.getTypeOptions(typeList)

    return (
      <div className="write">
        <Row>
          <Space>
            <Button className="write-option" type="primary" onClick={this.updateArticle}>发布文章</Button>
          </Space>
        </Row>
        <Form ref={this.formRef} onValuesChange={this.onFormValuesChange}>
          <Row justify="space-between">
            <Col span={18}>
              <Form.Item name='title'>
                <Input placeholder="文章标题" size="large" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name='time'>
                <DatePicker allowClear={false} inputReadOnly={true} format="YYYY年MM月DD日" placeholder="日期" size="large"/>
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item name='type'>
                <Select size="large" className="passage-type">
                  {typeOptions}
                  {/* <Option value={1}>{123}</Option> */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={12}>
              <Form.Item name='introduce'>
                <TextArea className="markdown-introduce" rows={5} placeholder="文章介绍" />
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
                <TextArea className="markdown-content" rows={22} placeholder="文章内容"/>
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