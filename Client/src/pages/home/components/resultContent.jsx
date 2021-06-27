import React, { Component } from 'react'
import { Card, Row, Col, Button, Spin, message } from 'antd';
/*
左侧导航的组件
 */
export default class ResultContent extends Component {
  onClickFun = (href)=>{
    if(this.props.searchType === 'web'){
      return(()=>{window.open(href)})
    }
    if(this.props.searchType === 'file'){
      return(()=>{
        var ele = document.createElement("input"); //创建一个input标签
        ele.setAttribute("value", href); // 设置改input的value值
        document.body.appendChild(ele); // 将input添加到body
        ele.select();  // 获取input的文本内容
        document.execCommand("copy"); // 执行copy指令
        document.body.removeChild(ele); // 删除input标签
        message.info('已将磁力链接复制到剪切板！')
      })
    }
  }

  getCardNodes = (resultList)=>{
    return resultList.map(item => {
      return (
        <Row key={item.href} justify='center' style={{marginBottom:'10px'}}>
          <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <Card title={item.title} hoverable={true} onClick={this.onClickFun(item.href)}
            headStyle={{color:'rgb(24, 144, 255)', minHeight:'30px', lineHeight:'30px'}}>
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