import React, { Component } from 'react'
import { Card, Row, Col, Button, Spin } from 'antd';
/*
左侧导航的组件
 */
export default class ResultContent extends Component {
  onClickFun = (href)=>{
    if(this.props.searchType === 'web'){
      return(()=>{window.open(href)})
    }
  }

  getCardNodes = (resultList)=>{
    return resultList.map(item => {
      return (
        <Row key={item.href} justify='center' style={{marginBottom:'10px'}}>
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <Card title={item.title} hoverable={true} onClick={this.onClickFun(item.href)}>
              {item.contain}
            </Card>
          </Col>
        </Row>
      )
    })
  }

  render() {
    const {result, loading} = this.props
    let resultList = []
    let moreUrl = ''
    let cardNodes = []
    if(result['data']){
      resultList = result['data']
      moreUrl = result['moreUrl']
      cardNodes = this.getCardNodes(resultList)
    }
    return (
      <div>
        <div style={loading?{display:'none'}:{display:'block'}}>
          {cardNodes}
          <Row justify='center' style={{marginBottom:'10px'}}>
            <Col span={moreUrl!==''?'':0}>
              <Button type="link" href={moreUrl}>
                点击查看更多
              </Button>
            </Col>
          </Row>
        </div>
        <div style={loading?{display:'block'}:{display:'none'}}>
          <Row justify='center' style={{marginBottom:'10px'}}>
            <Col>
              <Spin size='large'/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}