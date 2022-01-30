import { Component } from 'react'
import { Col,Row,Switch } from 'antd';
import { SmileOutlined } from '@ant-design/icons'

import './about.less'
/*
首页的路由组件
*/
export default class About extends Component {
  // state={
  //   aboutContent : aboutTec
  // }

  // onChange = (checked)=>{
  //   if(checked) this.setState({aboutContent:aboutArt})
  //   else this.setState({aboutContent:aboutTec})
  // }
  render() {
    return (
      <div className='about-content'>
        {/* <Row justify='center'>
          <Switch checkedChildren={<SmileOutlined />} onChange={this.onChange}/>
        </Row>
        <Row justify='center'>
          <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 16 }} lg={{ span: 12 }}>
            <MyMarkdown content={this.state.aboutContent}/>
          </Col>
        </Row> */}
      </div>
    );
  }
}