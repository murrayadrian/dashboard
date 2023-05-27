import React from 'react'
import { SContainer, SMenuWrapper, STitle, SUserList } from './styles'
import Card from '../../components/Card/Card'

import avatar from '../../assets/smavatar.jpg'
import User from '../../components/User/User'
import { Container, CardContainer } from '../../components/Container';
import { v } from '../../styles/variables'
import { MidSection } from '../../components/MidSection/MidSection'

const Home = () => {
  return (
    <Container>
      <MidSection/>      
      <Container w='348px' t='column' justify='space-between'>
        <CardContainer gap={v.mdGap}>
          <Card title="Revenue" amount={5.00} currency="eth" percent={12.3}></Card>
          <Card title="Spending" amount={2.00} currency="eth" percent={8.1}></Card>
          <Card title="ROI" amount={14.02} currency="%" percent={-5.1}></Card>
          <Card title="Estimated" amount={7.00} currency="eth" percent={3.2}></Card>
        </CardContainer>

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

      </Container>
    </Container>
  )
}

export default Home