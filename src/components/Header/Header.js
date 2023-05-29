import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {SPlaceholder, SSearch, SSearchIcon } from './styles'
import CircleImage from '../CircleImage/CircleImage'
import userLogo from '../../assets/user.jpg'
import bellLogo from '../../assets/bell.svg'
import {Container} from '../Container'
import {v} from '../../styles/variables'
import styled from 'styled-components'

const SHeader = styled(Container)`
    margin-bottom: ${v.headerMarginBottom};
`

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
      <Container gap={v.lgGap}>
        <CircleImage height="56px" width="56px" image={bellLogo} background='#FFFFFF'></CircleImage>
        <CircleImage height="56px" width="56px" image={userLogo} background='rgb(202, 234, 230)'></CircleImage>
      </Container>
    </SHeader>
  )
}

export default Header
