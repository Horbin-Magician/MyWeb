import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './passages.less'
import PsgList from './pages/psgList/psgList';
import PsgDetail from './pages/psgDetail/psgDetail';

/*
博客页的路由组件
*/
export default class Passages extends Component {
  render() {
    return (
      <Switch>
        <Route path='/passages/detail/:id' component={PsgDetail}></Route>
        <Route path='/passages' component={PsgList}></Route>
      </Switch>
    );
  }
}