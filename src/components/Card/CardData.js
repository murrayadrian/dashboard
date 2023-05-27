import React from 'react'
import CircleImage from '../CircleImage/CircleImage'
import styled from 'styled-components'
import ethicon from '../../assets/ethicon.svg'
import {PlaceButton} from "../Button/Button";
const SCardData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;  
    width: 348px;
    height: 364px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 16px;
`
const SImageWrapper = styled.div`
    position: relative;
    img {
        height: 196px;
        width: 100%;
        padding: 12px;
    }
`
const SButton = styled.button`
    width:100px
`

const TimeButton = styled(SButton)`
    position: absolute;
    left:24px;
    bottom:24px;
`
const STitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SMainContent = styled.div`
    padding: 0px 24px;
`
const STitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    
`
const SLike = styled.div``
const SUserWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`
const SAmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .amount-wrapper {
        width: 110px;
        height: 31px;
        text-align: right;
        .amount {
            margin-left: 12px;
        }
    }
`

const CardData = ({img,width,height,time,title,likes,avatar,username,amount}) => {
  return (
    <SCardData>
        <SImageWrapper>
            <img src={img} alt="img"/>
            <PlaceButton w='144px' br='40px'>Place a bid</PlaceButton>
            <TimeButton>{time}</TimeButton>
        </SImageWrapper>

        <SMainContent>
            <STitleWrapper>
                <STitle>{title}</STitle>
                <SLike>{likes} Likes</SLike>
            </STitleWrapper>
            <SUserWrapper>
                <CircleImage width={width} height={height} image={avatar} margin='10px'></CircleImage>
                <span>@{username}</span>
            </SUserWrapper>
            <SAmountWrapper>
                <div>Current Bid</div>
                <div className="amount-wrapper">
                    <img src={ethicon} alt="img" className="eth"/>
                    <span className="amount">{amount} ETH</span>
                </div>
            </SAmountWrapper>
        </SMainContent>   
    </SCardData>
  )
}

export default CardData