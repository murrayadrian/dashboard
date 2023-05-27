import { SItem, STitle } from "../../containers/Home/styles"
import CardData from "../Card/CardData"
import { CardContainer, Container } from "../Container"
import SlideShow from "../SlideShow/SlideShow"
import { v } from '../../styles/variables'
import monkey from '../../assets/monkey.jpg'
import avatar from '../../assets/smavatar.jpg'

export const MidSection=() =>{
    return (
    <Container w={v.middleWidth} t='column'>
        <SlideShow></SlideShow>
        <Container mBottom={v.mdGap} mTop={v.mdGap}>
          <STitle>Trending Auctions</STitle>
          <Container>
            <SItem>Art</SItem>
            <SItem>Music</SItem>
            <SItem>Collectibles</SItem>
            <SItem>Utility</SItem>
          </Container>
        </Container>
        <CardContainer>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
          <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
        </CardContainer>
    </Container>
    )
}