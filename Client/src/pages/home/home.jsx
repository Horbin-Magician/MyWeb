import React, { Component } from 'react'
import { Input, Row, Col } from 'antd'
import logo from '../../assets/imgs/logo.svg'

/*
首页的路由组件
*/
export default class Home extends Component {
  onSearch = e => {
    window.open('https://www.baidu.com/s?&wd='+e.target.value)
  }
  render() {
    return (
      <div style={{paddingTop:'200px'}}>
        <Row justify="center" style={{marginBottom:'10px'}}>
          <object data={logo} height="100" 
          type="image/svg+xml" aria-label='logo'
          codebase="http://www.adobe.com/svg/viewer/install/" />
        </Row>
        <Row justify="center">
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Input style={{textAlign:'center'}} placeholder="填写内容，回车即可搜索"
            onPressEnter={this.onSearch} />
          </Col>
        </Row>
      </div>
    );
  }
}