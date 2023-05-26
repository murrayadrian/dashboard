import styled from "styled-components"

const SCircle = styled.div`
    width: ${props => props.width || '44px'};
    height: ${props => props.height || '44px'};
    border-radius: 50%;
    position: relative;
    margin-right:${props => props.margin || '40px'};;
    background : ${props => props.background || 'none'};
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`
const CircleImage = ({width, height, image, background, margin}) => {
  return (
    <SCircle width = {width} height = {height} background={background} margin={margin}>
        <img src={image} alt="img"/>
    </SCircle>
  )
}

export default CircleImage