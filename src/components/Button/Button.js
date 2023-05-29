import React from 'react'
import styled,{css} from 'styled-components'
import redArrow from '../../assets/red-arrow.svg'
import greenArrow from '../../assets/green-arrow.svg'
import { v } from '../../styles/variables'
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
const base = css`
  height: 46px;
  font-weight: ${v.fontWeight.normal};
  font-size: 16px;
  background: ${v.color.primary};
  border-radius: ${v.radius.xxl};
  padding: 12px 30px;
`
const SlideBtn1 = styled.button`
  ${base};
  width: 128px;
  color: ${v.color.secondary};
  border: none;
  font-weight: ${v.fontWeight.bold};
`
const SlideBtn2 = styled.button`
  ${base};
  width:100px;
  color: ${v.color.primary};
  border:1px solid ${v.color.primary};
  background: transparent;
`
const PlaceBtn = styled(SlideBtn1)`
  width:144px;
`
const LogicBtn = styled.button`
  ${base};
  width: 115px;
  color: ${v.color.text3};
  border: 1px solid #E9E9E9;
  border-radius: ${v.radius.sm};
  padding: 11px 22px;
`
const FollowBtn = styled.button`
  width: 77px;
  height: 32px;
  background: ${v.color.secondaryLight};
  border-radius: ${v.radius.lg};
  padding: 8px 14px;
  color: ${v.color.secondary};
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