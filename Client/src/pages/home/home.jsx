import React, { Component } from 'react'
import { Input, Row, Col } from 'antd'

import logo from '../../assets/imgs/logo.svg'

import './home.less'

/*
首页的路由组件
*/
export default class Home extends Component {
  state = {
    searchValue: '',
    searchResult: {},
    searchResultLoading: true,
  }

  searchTypeOptions = [
    { label: '网页', value: 'web' },
    { label: '文件', value: 'file' },
  ];

  onSearch = () => {
    window.location.href="https://www.baidu.com/s?ie=utf-8&wd="+this.state.searchValue; 
  }

  render() {
    return (
      <div style={{ paddingTop: '200px' }}>
        {/* LOGO */}
        <Row justify="center" style={{ marginBottom: '10px' }}>
          <Col span={{ paddingTop: '200px' }}><img src={logo} height="100" alt="logo"></img></Col>
        </Row>
        {/* 搜索框 */}
        <Row justify="center">
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Input className="search-input" placeholder="填写内容，回车即可搜索"
              onChange={(e) => this.setState({ searchValue: e.target.value })}
              onPressEnter={this.onSearch} />
          </Col>
        </Row>
      </div>
    );
  }
}