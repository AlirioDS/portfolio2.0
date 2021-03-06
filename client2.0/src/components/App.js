import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Layout from './layout'
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portfolio'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/portfolio" component={Portfolio}/>

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  )
}

export default App
