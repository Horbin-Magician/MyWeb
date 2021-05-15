import {Component, lazy, Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Loading from './components/loading/loading'

const Login = lazy(()=>import('./pages/login/login'))
const Admin = lazy(()=>import('./pages/admin/admin'))
const Tools = lazy(()=>import('./pages/tools/tools'))
const Home = lazy(()=>import('./pages/home/home'))
const About = lazy(()=>import('./pages/about/about'))

export default class App extends Component {
  state = {  }
  render() { 
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Route path='/tools' component={Tools}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/' exact component={Home}></Route>
            <Redirect to='/'/>
          </Switch>
        </Suspense>
      </BrowserRouter>
     );
  }
}