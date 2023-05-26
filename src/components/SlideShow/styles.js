import styled from "styled-components";
import backgroundImg from '../../assets/background.svg'

export const SSlideShow = styled.div`
    background: linear-gradient(75.33deg, rgba(0, 0, 0, 0.2) -10.41%, rgba(0, 0, 0, 0) 62.93%);
    background-image: url('${backgroundImg}');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 12px;
    width: 100%;
    height: 354px;
    position: relative;
`
export const Container = styled.div`
  position: absolute;
  top: 77px;
  right: 120px;
  bottom: 77px;
  left: 60px;
  width: 536px;
  height: 130px;
`

export const SContent = styled.div`
    font-size: 54px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 65px;
    letter-spacing: -0.02em;  
    margin-bottom: 24px;
`

export const SBtnList = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
`
