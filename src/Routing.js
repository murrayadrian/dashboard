import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Login from './containers/Login'
import NotFoundPage from './containers/NotFoundPage'

const Routing = () => {
  return (
    <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/home' element={<Home/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default Routing