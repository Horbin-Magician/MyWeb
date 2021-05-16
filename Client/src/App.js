import {Component, lazy, Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Loading from './components/loading/loading'

const Login = lazy(()=>import('./pages/login/login'))
const Home = lazy(()=>import('./pages/home/home'))
const Tools = lazy(()=>import('./pages/tools/tools'))
const About = lazy(()=>import('./pages/about/about'))
const Admin = lazy(()=>import('./pages/admin/admin'))

export default class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/tools' component={Tools}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Route path='/' exact component={Home}></Route>
            <Redirect to='/'/>
          </Switch>
        </Suspense>
      </BrowserRouter>
     );
  }
}