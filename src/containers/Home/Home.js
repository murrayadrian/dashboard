import React from 'react'
import { SCardList, SContainer } from './styles'
import Card from '../../components/Card/Card'
import SlideShow from '../../components/SlideShow/SlideShow'

const Home = () => {
  return (
    <main style={{paddingRight:'30px'}}>
      <SContainer>
        <SlideShow/>
        <SCardList>
          <Card title="Revenue" amount={5.00} currency="eth" percent={12.3}></Card>
          <Card title="Spending" amount={2.00} currency="eth" percent={8.1}></Card>
          <Card title="ROI" amount={14.02} currency="%" percent={5.1}></Card>
          <Card title="Estimated" amount={7.00} currency="eth" percent={3.2}></Card>
        </SCardList>
      </SContainer>
    </main>
  )
}

export default Home