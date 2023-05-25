import React from 'react'
import CircleImage from '../CircleImage/CircleImage'

const CardData = ({img,width,height,time,title,likes,avatar,username,amount}) => {
  return (
    <SCardData>
        <SImageWrapper>
            <img src={img} alt="img"/>
            <Button>Place a bid</Button>
            <Button>{time}</Button>
        </SImageWrapper>
        <STitleWrapper>
            <STitle>{title}</STitle>
            <SLike>{likes} Likes</SLike>
        </STitleWrapper>
        <SUserWrapper>
            <CircleImage width={width} height={height} image={avatar}></CircleImage>
            <span>@{username}</span>
        </SUserWrapper>
        <SAmountWrapper>
            <div>Current Bid</div>
            
        </SAmountWrapper>
    </SCardData>
  )
}

export default CardData