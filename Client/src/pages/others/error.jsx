import {Component} from 'react'

import {
  FrownOutlined,
} from '@ant-design/icons';

/*
错误页的路由组件
*/ 
export default class About extends Component {
    render() {
      return ( 
        <div style={{position: 'absolute',left: '50%',top: '50%',
        transform: 'translate(-50%, -50%)',textAlign:'center'}}>
          <FrownOutlined style={{fontSize:'50px', color:'red'}}/><br/><br/>
          没有找到该页面，请检查路径是否有误！
        </div>
       );
    }
}