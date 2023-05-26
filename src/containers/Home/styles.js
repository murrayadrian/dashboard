import styled from "styled-components";


export const SMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const SMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 400px);
    border:1px solid yellow;
    padding:0 20px 0 20px;
`
export const SMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const STitle = styled.div`
    font-size: 20px;
    font-weight: 700;
`
export const SMenu = styled.div`
    display: flex;
    justify-content: center;
`
export const SItem = styled.div`
    margin-right: 20px;
    :nth-last-child(1) {
        margin-right: 0;
    }
`
export const SRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    border:1px solid red;
`
export const SCardList =styled.div`
    width: 370px;
    display: flex;
    flex-wrap: wrap;
`

export const SCardItems= styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`