import { Container } from '../../components/Container';
import { v } from '../../styles/variables'
import { MidSection } from '../../components/MidSection'
import { RightSection } from '../../components/RightSection/RightSection';

const Home = () => {
  return (
    <Container>
      <MidSection width={v.middleWidth} type='column'/>
      <RightSection width={v.rightbarWidth} type='column' justify='flex-start'/>
    </Container>
  )
}

export default Home