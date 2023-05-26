import React from 'react'
import CircleImage from '../CircleImage/CircleImage'
import styled from 'styled-components'
import ethicon from '../../assets/ethicon.svg'
const SCardData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 348px;
    height: 364px;
    margin-bottom: 20px;
    background-color: #FFFFFF;
`
const SImageWrapper = styled.div`
    position: relative;
    img{
        width: 100%;
    }
`
const SButton = styled.button`
    width:100px
`
const CenterButton = styled(SButton)`
    position: absolute;
    top:90px;
    left:110px;
`
const TimeButton = styled(SButton)`
    position: absolute;
    left:0px;
    bottom:0px;
`
const STitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const STitle = styled.div``
const SLike = styled.div``
const SUserWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`
const SAmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardData = ({img,width,height,time,title,likes,avatar,username,amount}) => {
  return (
    <SCardData>
        <SImageWrapper>
            <img src={img} alt="img"/>
            <CenterButton>Place a bid</CenterButton>
            <TimeButton>{time}</TimeButton>
        </SImageWrapper>
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
    </SCardData>
  )
}

export default CardData