import React from 'react'
import { SSidebar } from './styles'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
import img5 from '../../assets/img5.svg'
import img6 from '../../assets/img6.svg'
import img7 from '../../assets/img7.svg'
import img8 from '../../assets/img8.svg'
import img9 from '../../assets/img9.svg'
import NavItem from '../NavItem/NavItem'
import { Logo } from '../Logo/Logo'

const Sidebar = () => {
  return (
    <SSidebar>
      <Logo/>
      <div className="nav">
          <NavItem text="Home" path="/" image={img1}></NavItem>
          <NavItem text="About" path="/about" image={img2}></NavItem>
          <NavItem text="Login" path="/login" image={img3}></NavItem>
      </div>
      <h3>PROFILE</h3>
      <br></br>
      <div className="nav">
        <NavItem text="My Portfolio" path="/portfolio" image={img4}></NavItem>
        <NavItem text="Wallet" path="/wallet" image={img5}></NavItem>
        <NavItem text="Favourites" path="/favourites" image={img6}></NavItem>
        <NavItem text="History" path="/history" image={img7}></NavItem>
        <NavItem text="Settings" path="/settings" image={img8}></NavItem>
      </div>
      <h3>OTHER</h3>
      <br></br>
      <NavItem text="Light Mode" path="/" image={img9}></NavItem>
        
    </SSidebar>
  )
}

export default Sidebar