import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Favourites from './favourites/favourites'
import Error from '../others/error'
/*
工具页的路由组件
*/
export default class Tools extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/tools/favorites' component={Favourites}></Route>
          <Route path='/' component={Error}></Route>
        </Switch>
      </div>
    );
  }
}