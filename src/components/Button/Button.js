import React from 'react'
import styled from 'styled-components'
import redArrow from '../../assets/red-arrow.svg'
import greenArrow from '../../assets/green-arrow.svg'
const SButton = styled.button`
    height : ${props => props.h || '46px'};
    background-color: ${props => props.bg || '#FFFFFF'};
    width : ${props => props.w};
    border-radius : ${props => props.br};
    color: ${props => props.c};
    border: ${props => props.bd ? `1px solid ${props.bd}` : 'none'};
    padding: ${props => props.pd};
    .eth{
      margin-right: 10px;
    }
`
export const PlaceButton = styled(SButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Button = ({percent,w, h, br, bg, c, bd, children}) => {
  return (
    <SButton w={w} h={h} br={br} bg={bg} c={c} bd={bd}>
        {percent && <img className='eth' src={percent < 0 ? redArrow : greenArrow} alt=''/>}
        {children}
    </SButton>
  )  
}
export default Button