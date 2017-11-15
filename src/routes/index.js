/**
 * @des app入口，最上层组件
 */
import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createHashHistory'

import Home from './home'
import Detail from './detail'
import MainLayout from 'components/MainLayout'

const history = createHistory()

const App = () => (
	<Router history={ history }>
    <MainLayout>
      <Route exact path="/" component={ Home } />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </MainLayout>
  </Router>
)

export default App
