import React from 'react'
import { SNavItem } from './styles'
import { NavLink } from 'react-router-dom'

const NavItem = ({text,path,image}) => {
  return (
    <SNavItem>
        <img src={image} alt="nav-icon" />
        <NavLink to={path}>{text}</NavLink>
    </SNavItem>
  )
}

export default NavItem