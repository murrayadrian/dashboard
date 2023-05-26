import React from 'react'
import styled from 'styled-components'


const SButton = styled.button`
    width : ${props => props.w};
    height : ${props => props.h};
    border-radius : ${props => props.r};
    background-color: ${props => props.bg};
    color: ${props => props.c};
    border: 1px solid ${props => props.bd}
`
const Button = ({percent,w, h, r, bg, c, bd, children}) => {
  return (
    <SButton w={w} h={h} r={r} bg={bg} c={c} bd={bd}>
        {children}
    </SButton>
  )
}

export default Button