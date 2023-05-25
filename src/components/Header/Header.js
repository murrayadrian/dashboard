import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { SHeader,SPlaceholder, SSearch, SSearchIcon,SUser } from './styles'
import CircleImage from '../CircleImage/CircleImage'
import userLogo from '../../assets/user.svg'
import bellLogo from '../../assets/bell.svg'

const Header = () => {
  return (
    <SHeader>
      <SSearch>
        <SSearchIcon>
          <AiOutlineSearch/>
        </SSearchIcon>
        <input type="text"/>
        <SPlaceholder>Search Item, Collection and Account..</SPlaceholder>
      </SSearch>
      <SUser>
        <CircleImage height="56px" width="56px" image={bellLogo} background='#FFFFFF'></CircleImage>
        <CircleImage height="56px" width="56px" image={userLogo}></CircleImage>
      </SUser>
    </SHeader>
  )
}

export default Header
