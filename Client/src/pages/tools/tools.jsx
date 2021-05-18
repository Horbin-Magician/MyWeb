import { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Favourites from './favourites/favourites'
/*
工具页的路由组件
*/
export default class Tools extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/tools/favorites' component={Favourites}></Route>
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}