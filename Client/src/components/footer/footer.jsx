import { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col} from 'antd';

// import beianIcon from '../../assets/imgs/beianIcon.png';
import './footer.less'
/*
首页的路由组件
*/
class Footer extends Component {
  render() {
    //若为管理界面，隐藏header
    const url = this.props.history.location.pathname.split('/')
    if(url[1] === 'admin')return null;
    
    return (
      <Row className='footer' justify="center" gutter={{ xs: 8, sm: 16, md: 24}}>
        <Col>
          {/* <img src={beianIcon} alt='' /> */}
          <a target="_blank" rel="noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102004461">
          鄂公网安备 42011102004461号</a>
        </Col>
        <Col>
          <a href='https://beian.miit.gov.cn'>赣ICP备2021004310号-1</a>
        </Col>
        <Col>
          <Link to="/about">
            ©2021 Horbin
          </Link>
        </Col>
      </Row>
    );
  }
}
export default withRouter(Footer)