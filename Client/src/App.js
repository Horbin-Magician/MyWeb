import { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Loading from './components/loading/loading'

const Home = lazy(() => import('./pages/home/home'))
const Tools = lazy(() => import('./pages/tools/tools'))
const About = lazy(() => import('./pages/about/about'))

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header />
          <div style={{minHeight:'calc(100% - 80px)'}}>
            <Switch>
              <Route path='/tools' component={Tools}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/' exact component={Home}></Route>
              <Redirect to='/' />
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </BrowserRouter>
    );
  }
}