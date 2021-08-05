import { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Loading from './components/loading/loading'
import { initUser } from './utils/userUtils'

const Admin = lazy(() => import('./pages/admin/admin'))
const Home = lazy(() => import('./pages/home/home'))
const Passages = lazy(() => import('./pages/passages/passages'))
const Tools = lazy(() => import('./pages/tools/tools'))
const About = lazy(() => import('./pages/about/about'))
const Error = lazy(() => import('./pages/others/error'))

export default class App extends Component {
  constructor(props){
    super(props)
    initUser() //初始化User信息
  }
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header />
          <div style={{minHeight:'calc(100% - 5rem)'}}>
            <Switch>
              <Route path='/passages' component={Passages}></Route>
              <Route path='/tools' component={Tools}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/admin' component={Admin}></Route>
              <Route path='/' exact component={Home}></Route>
              <Route path='/' component={Error}></Route>
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </BrowserRouter>
    );
  }
}