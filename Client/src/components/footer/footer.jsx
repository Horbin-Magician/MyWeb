import {Component} from 'react'

import './footer.less'
/*
首页的路由组件
*/ 
export default class Footer extends Component {
    render() {
      return (
        <div className='footer'>
          <a  href='https://beian.miit.gov.cn'>赣ICP备2021004310号-1</a>
          &nbsp;&nbsp;&nbsp;
          ©2021 Horbin
        </div>
       );
    }
}