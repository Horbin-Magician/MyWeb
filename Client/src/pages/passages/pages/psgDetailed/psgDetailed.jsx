import { Component } from 'react'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined } from '@ant-design/icons'

import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import './psgDetailed.less'

/*
博客页的路由组件
*/
export default class PsgDetailed extends Component {
  markdown=
    '## P01:课程介绍和环境搭建\n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '## p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '## p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '## p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '## p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '## p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '## p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'  
  render() {
    return (
      <Row justify='center'>
        <Col className="psgDetailed-left" xs={0} sm={0} md={3} lg={3}>
          <Affix offsetTop={50}>
            <MarkNav className='psgDetailed-left-menu' ordered={false}
              source={this.markdown}/>
          </Affix>
        </Col>
        <Col className="psgDetailed-main" xs={24} sm={24} md={14} lg={14}>
          <Breadcrumb className='psgDeailed-main-breadcrumb'>
              <Breadcrumb.Item><a href='/'>原初</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href='/passages'>夕拾</a></Breadcrumb.Item>
              <Breadcrumb.Item>文章名</Breadcrumb.Item>
          </Breadcrumb>
          <div className='psgDetailed-main-title'>React实战技术教程</div>
          <div className='psgDetailed-main-icon'>
            <span><CalendarOutlined/>2019-06-03</span>
            <span><FolderOutlined/>教程</span>
          </div>
          <div className='psgDetailed-main-context'>
            <ReactMarkdown
              children={this.markdown}
            />
          </div>
        </Col>
      </Row>
    );
  }
}