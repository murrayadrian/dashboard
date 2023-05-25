import React from 'react'
import styled from 'styled-components'


const SButton = styled.button`
    width:50px;
    height:50px;
`
const Button = ({percent,children}) => {
  return (
    <SButton>
        {children}
    </SButton>
  )
}

export default Button