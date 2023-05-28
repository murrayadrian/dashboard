import { Container } from "../Container"
import SlideShow from "../SlideShow/SlideShow"
import { v } from '../../styles/variables'

import { Trending } from "../Trending/Trending"

export const MidSection=({width,type}) =>{
    return (
    <Container w={width} t={type}>
        <SlideShow/>
        <Trending type='column' marginTop={v.mdGap} marginBottom={v.mdGap}/>
    </Container>
    )
}