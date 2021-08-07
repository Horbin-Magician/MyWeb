import React, { Component } from 'react'
import { Input, Row, Col, Radio, message } from 'antd'

import logo from '../../assets/imgs/logo.svg'
import ResultContent from './components/resultContent'
import { reqSearch } from '../../api/searchAPI'

import './home.less'

/*
首页的路由组件
*/
export default class Home extends Component {
  state = {
    searchType: 'web',
    showState: 'normal',
    searchValue: '',
    searchResult: {},
    searchResultLoading: true,
  }

  searchTypeOptions = [
    { label: '网页', value: 'web' },
    { label: '文件', value: 'file' },
  ];

  onSearch = () => {
    if (this.state.showState === 'normal') this.setState({ showState: 'search' })
    this.getSearchResult()
  }

  getSearchResult = async (type = this.state.searchType) => {
    this.setState({ searchResultLoading: true })
    let searchResult = await reqSearch(type, this.state.searchValue)
    if (searchResult['status'] === 0) {
      this.setState({ searchResult: searchResult, searchResultLoading: false })
    } else {
      message.info(searchResult['errorMessage'])
      this.setState({ searchResultLoading: false, showState: 'normal' })
    }
  }

  onSearchTypeChange = e => {
    this.setState({ searchType: e.target.value })
    if (this.state.showState === 'search') this.getSearchResult(e.target.value)
  }

  render() {
    //根据showState改变显示方式
    let { showState } = this.state
    let divStyle = { paddingTop: '200px' }
    let logoSpan = ''
    let resultContentSpan = 0
    if (showState === 'search') {
      divStyle = {}
      logoSpan = 0
      resultContentSpan = 24
    }

    return (
      <div style={divStyle}>
        {/* LOGO */}
        <Row justify="center" style={{ marginBottom: '10px' }}>
          <Col span={logoSpan}>
            <img src={logo} height="100" alt="logo"></img>
          </Col>
        </Row>
        {/* 搜索框 */}
        <Row justify="center">
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Input className="search-input" placeholder="填写内容，回车即可搜索"
              onChange={(e) => this.setState({ searchValue: e.target.value })}
              onPressEnter={this.onSearch} />
          </Col>
        </Row>
        {/* 类型选择框 */}
        <Row justify="center" style={{ marginTop: '10px' }}>
          <Radio.Group onChange={this.onSearchTypeChange} size="middle" value={this.state.searchType}
            options={this.searchTypeOptions} optionType="button" buttonStyle="solid" />
        </Row>
        {/* 搜索内容展示框 */}
        <Row justify="center" style={{ marginTop: '10px' }}>
          <Col span={resultContentSpan}>
            <ResultContent searchType={this.state.searchType} result={this.state.searchResult}
              loading={this.state.searchResultLoading} />
          </Col>
        </Row>
      </div>
    );
  }
}