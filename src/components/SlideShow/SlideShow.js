import React from 'react'
import { SBtnList, SContent, SSlideShow, Container } from './styles'
import Button from '../Button/Button'

const SlideShow = () => {
  return (
    <SSlideShow>
      <Container>
        <SContent>Discover, Create and Sell Your Own NFT.</SContent>
        <SBtnList>
            <Button>Discover</Button>
            <Button>Create</Button>
        </SBtnList>
        </Container>
    </SSlideShow>
  )
}

export default SlideShow