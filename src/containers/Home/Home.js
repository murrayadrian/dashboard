import React from 'react'
import { SCardItems, SCardList, SContainer, SItem, SMain, SMenu, SMenuWrapper, SMiddle, SRight, STitle, SUserList } from './styles'
import Card from '../../components/Card/Card'
import SlideShow from '../../components/SlideShow/SlideShow'
import CardData from '../../components/Card/CardData'
import monkey from '../../assets/monkey.jpg'
import avatar from '../../assets/smavatar.jpg'
import User from '../../components/User/User'
import { Container } from '../../components/Container';

const Home = () => {
  return (
    <Container>
      <SMiddle>
        <SlideShow></SlideShow>
        <SMenuWrapper>
          <STitle>Trending Auctions</STitle>
          <SMenu>
            <SItem>Art</SItem>
            <SItem>Music</SItem>
            <SItem>Collectibles</SItem>
            <SItem>Utility</SItem>
          </SMenu>
        </SMenuWrapper>
        <SCardItems>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
        </SCardItems>
      </SMiddle>

      <SRight>
        <SCardList>
          <Card title="Revenue" amount={5.00} currency="eth" percent={12.3}></Card>
          <Card title="Spending" amount={2.00} currency="eth" percent={8.1}></Card>
          <Card title="ROI" amount={14.02} currency="%" percent={-5.1}></Card>
          <Card title="Estimated" amount={7.00} currency="eth" percent={3.2}></Card>
        </SCardList>

        <SContainer>
          <SMenuWrapper>
            <STitle>Top Creator</STitle>
            <p>See All</p>
          </SMenuWrapper>
          <SUserList>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
          </SUserList>
        </SContainer>

      </SRight>
    </Container>
  )
}

export default Home