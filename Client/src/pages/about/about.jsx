import { Component } from 'react'
import { Tabs } from 'antd';

import './about.less'
/*
首页的路由组件
*/
const { TabPane } = Tabs;
export default class About extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="art" centered>
        <TabPane tab="文艺范" key="art" className='about-content about-content-art'>
          文艺版
        </TabPane>
        <TabPane tab="技术范" key="tec" className='about-content about-content-tec'>
          技术版
        </TabPane>
      </Tabs>
    );
  }
}