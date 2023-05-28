import styled from 'styled-components'
import avatar from '../../assets/smavatar.jpg'
import { Container } from '../Container'
import { v } from '../../styles/variables'
import {User} from '../User'

const SLeaderBoard = styled(Container)`
    padding-left: ${v.lgSpacing};
    padding-right: ${v.lgSpacing};
    margin-top: ${v.lgSpacing};
    border-radius: ${v.radius.md};
    background-color: ${v.color.primary};
`
const Title = styled.div`
    font-size: ${v.fontSize.lg};
    font-weight: ${v.fontWeight.bold};
`
const UserList = styled(Container)`
    align-items: center;
`
const TitleWrapper = styled(Container)`
    margin-bottom: ${v.mdGap};
    margin-top: ${v.mdGap};
`
export const LeaderBoard = ({type, height, justify}) => {
    return (
    <SLeaderBoard t={type} h={height} justify={justify}>
        <TitleWrapper>
            <Title>Top Creator</Title>
            <p>See All</p>
        </TitleWrapper>
        <UserList t='column' gap='9px'>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
            <User id ={1} width='44px' height='44px' image={avatar} fullname='Michael Jordan' username='jordan'/>
        </UserList>
    </SLeaderBoard>
    )
}


