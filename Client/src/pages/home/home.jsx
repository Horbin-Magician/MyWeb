import { Component } from 'react'
import { Input, Row, Col } from 'antd';

/*
首页的路由组件
*/
const { Search } = Input;

export default class Home extends Component {
  onSearch = value => {
    window.open('https://www.baidu.com/s?&wd='+value)
  }
  render() {
    return (
      <div style={{paddingTop:'300px'}}>
        <Row justify="center">
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Search style={{textAlign:'center'}} placeholder="请填写搜索内容" onSearch={this.onSearch} enterButton />
          </Col>
        </Row>
      </div>
    );
  }
}