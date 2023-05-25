import styled from "styled-components";
import backgroundImg from '../../assets/background.svg'

export const SSlideShow = styled.div`
    background: linear-gradient(75.33deg, rgba(0, 0, 0, 0.2) -10.41%, rgba(0, 0, 0, 0) 62.93%);
    background-image: url('${backgroundImg}');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 12px;
    width: calc(100% - 100px);
    height: 354px;
    position: relative;
    margin-top: 10px;
`
export const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 40px;
`

export const SContent = styled.div`
    font-size: 54px;
    font-weight: 700;
    color: #FFFFFF;
`

export const SBtnList = styled.div`
    display: flex;
    justify-content: flex-start;
`
