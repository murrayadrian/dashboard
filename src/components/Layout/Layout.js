import React from 'react'
import { SLayout, SContainer } from './styles'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <SLayout>
        <Sidebar/>
        <SContainer>
          <Header/>
          {children}  
        </SContainer>
    </SLayout>
  )
}

export default Layout