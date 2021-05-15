import {Component} from 'react'

import Header from '../../components/header/header'

/*
首页的路由组件
*/ 
export default class Home extends Component {
    render() {
      return ( 
        <div>
          <Header/>
          <div>
            这是首页，但还没有开发哦～
          </div>
        </div>
       );
    }
}