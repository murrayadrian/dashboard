import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home'
import About from './containers/About'
import Login from './containers/Login'
import NotFoundPage from './containers/NotFoundPage'
const Routes = () => {
  return (
    <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route exact path = '/about'>
          <About/>
        </Route>
        <Route exact path = '/login'>
          <Login/>
        </Route>
        <Route exact path = '*'>
          <NotFoundPage/>
        </Route>
    </Switch>
  )
}

export default Routes