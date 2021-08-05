import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './passages.less'
import PsgList from './pages/psgList/psgList';
import PsgDetailed from './pages/psgDetailed/psgDetailed';

/*
博客页的路由组件
*/
export default class Passages extends Component {
  render() {
    return (
      <Switch>
        <Route path='/passages/detailed' component={PsgDetailed}></Route>
        <Route path='/passages' component={PsgList}></Route>
      </Switch>
    );
  }
}