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
    border:1px solid black;
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