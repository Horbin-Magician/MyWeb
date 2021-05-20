import { Component } from 'react'
import { Row, Col} from 'antd';

import beianIcon from '../../assets/imgs/beianIcon.png';
import './footer.less'
/*
首页的路由组件
*/
export default class Footer extends Component {
  render() {
    return (
      <Row className='footer' justify="center" gutter={{ xs: 8, sm: 16, md: 24}}>
        <Col>
          <img src={beianIcon} alt='' />
          <a target="_blank" rel="noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102004461">
          鄂公网安备 42011102004461号</a>
        </Col>
        <Col>
          <a href='https://beian.miit.gov.cn'>赣ICP备2021004310号-1</a>
        </Col>
        <Col>
          ©2021 Horbin
        </Col>
      </Row>
    );
  }
}