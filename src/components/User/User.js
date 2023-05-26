import React from 'react'
import styled from 'styled-components'
import CircleImage from '../CircleImage/CircleImage'
import Button from '../Button/Button'
import { v } from '../../styles/variables'

const SUser = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-bottom: ${v.mdSpacing};
    Button{
        position: absolute;
        right: ${v.mdSpacing};
    }
`
const SInfo = styled.div`
  
`
const User = ({id, width, height, image, fullname, username}) => {
  return (
    <SUser>
        <div>{id}.</div>
        <CircleImage width={width} height={height} image={image} margin='10px'></CircleImage>
        <SInfo>
            <div>{fullname}</div>
            <div>@{username}</div>
        </SInfo>
        <Button>Follow</Button>
    </SUser>
  )
}

export default User