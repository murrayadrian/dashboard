import React from 'react'
import { SBtnList, SContent, SSlideShow, Container } from './styles'
import Button from '../Button/Button'

const SlideShow = () => {
  return (
    <SSlideShow>
      <Container>
        <SContent>Discover, Create and Sell Your Own NFT.</SContent>
        <SBtnList>
            <Button w='128px' h='46px' r='40px' bg='#FFFFFF'>Discover</Button>
            <Button w='128px' h='46px' r='40px' bg='transparent' c='#FFFFFF' bd='#FFFFFF'>Create</Button>
        </SBtnList>
        </Container>
    </SSlideShow>
  )
}

export default SlideShow