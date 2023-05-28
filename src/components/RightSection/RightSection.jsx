import styled from 'styled-components'
import { v } from '../../styles/variables'
import Card from '../Card/Card'
import { CardContainer, Container } from '../Container'
import { LeaderBoard } from '../LearderBoard'

const CardWrapper = styled(Container)`
    flex-wrap: wrap;
    gap : ${props=>props.gap};
`
export const RightSection = ({width,type,justify}) => {
    return (
    <Container w={width} t={type} justify={justify}>
        <CardWrapper gap={v.mdGap}>
          <Card title="Revenue" amount={5.00} currency="eth" percent={12.3}></Card>
          <Card title="Spending" amount={2.00} currency="eth" percent={8.1}></Card>
          <Card title="ROI" amount={14.02} currency="%" percent={-5.1}></Card>
          <Card title="Estimated" amount={7.00} currency="eth" percent={3.2}></Card>
        </CardWrapper>
        <LeaderBoard type='column' height={v.leaderBoardHeight} justify='flex-start'/>
    </Container>
    )
}