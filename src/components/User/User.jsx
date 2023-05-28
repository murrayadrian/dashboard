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
export const User = ({id, width, height, image, fullname, username}) => {
  return (
    <SUser>
        <div>{id}.</div>
        <CircleImage width={width} height={height} image={image} margin='10px'></CircleImage>
        <SInfo>
            <div>{fullname}</div>
            <div>@{username}</div>
        </SInfo>
        <Button w='77px' h='32px' bg='rgba(84, 41, 255, 0.1)' br='20px' pd='8px 14px'>Follow</Button>
    </SUser>
  )
}

