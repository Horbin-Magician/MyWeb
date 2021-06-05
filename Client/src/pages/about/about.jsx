import { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import { Tabs,Col,Row } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons'

import aboutArt from '../../assets/passages/aboutArt.md'
import aboutTec from '../../assets/passages/aboutTec.md'
import './about.less'
/*
首页的路由组件
*/
const { TabPane } = Tabs;
export default class About extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="art" centered className='about-content'>
        <TabPane tab={<CoffeeOutlined style={{ fontSize: '24px', margin:'0'}}/>} key="art" className='about-content-art'>
          <Row justify='center'>
            <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 16 }} lg={{ span: 12 }}>
              <ReactMarkdown children={aboutArt}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab={<CoffeeOutlined rotate={180} style={{ fontSize: '24px', margin:'0'}}/>} key="tec" className='about-content-tec'>
          <Row justify='center'>
            <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 16 }} lg={{ span: 12 }}>
              <ReactMarkdown children={aboutTec}/>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    );
  }
}