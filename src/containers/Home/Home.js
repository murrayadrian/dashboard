import { Container } from '../../components/Container';
import { v } from '../../styles/variables'
import { MidSection } from '../../components/MidSection'
import { RightSection } from '../../components/RightSection/RightSection';
import Layout from '../../components/Layout/Layout';


const Home = () => {
  return (
    <Layout>
      <Container>
        <MidSection width={v.middleWidth} type='column'/>
        <RightSection width={v.rightbarWidth} type='column' justify='flex-start'/>
      </Container>
    </Layout> 
  )
}

export default Home