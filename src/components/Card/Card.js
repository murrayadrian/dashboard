import React from 'react'
import ethicon from '../../assets/ethicon.svg'
import styled from 'styled-components'
import Button from '../Button/Button'


const SCard = styled.div`
    padding: 24px;
    background: #FFFFFF;
    border-radius: 12px;
    font-size: 12px;
    line-height: 16px;
    height: 167px;
    width : 164px;

`
const Card = ({title, amount, currency, percent}) => {
  return (
    <SCard>
        <div className="title">{title}</div>
            <div className="amount-wrapper">
            {(currency !== '%') && <img src={ethicon} alt="img" className="eth"/>}
                <span className="amount">{amount}{currency}</span>
            </div>
        
        <Button percent={percent} w='115px' bd='#E9E9E9' br='12px'>{percent}%</Button>
    </SCard>
  )
}

export default Card