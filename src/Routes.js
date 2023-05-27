import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home'
import About from './containers/About'
import Login from './containers/Login'
import NotFoundPage from './containers/NotFoundPage'
const Routes = () => {
  return (
    <Routes>
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
    </Routes>
  )
}

export default Routes