import styled from "styled-components"
import { SItem, STitle } from "../../containers/Home/styles"
import { Container } from "../Container"
import monkey from '../../assets/monkey.jpg'
import avatar from '../../assets/smavatar.jpg'
import CardData from "../Card/CardData"


const STrending = styled(Container)`
    margin-top: ${props=>props.marginTop};
`

const STitleMenu = styled(Container)`
    margin-bottom: ${props=>props.mBottom};
`
const TitleMenu = ({marginBottom}) => {
    return(
        <STitleMenu mBottom={marginBottom}>
            <STitle>Trending Auctions</STitle>
            <Container>
                <SItem>Art</SItem>
                <SItem>Music</SItem>
                <SItem>Collectibles</SItem>
                <SItem>Utility</SItem>
            </Container>
        </STitleMenu>
    )
}

const CardWrapper = styled(Container)`
    flex-wrap: wrap;
`
export const Trending = ({type,marginTop,marginBottom}) => {
    return (
    <STrending t={type} marginTop={marginTop}>
        <TitleMenu marginBottom={marginBottom}/>
        <CardWrapper>
            <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
            <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
            <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
            <CardData img={monkey} width='28px' height='28px'time='12:03:45'title='Ape In Love' likes='21.5k' avatar={avatar}username='johnti60'amount={9.10}/>
        </CardWrapper>
    </STrending>
    )
}