import styled from "styled-components";
import { v } from "../../styles/variables";

export const SMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    //ok
`
export const SMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 716px;
    //ok
`
export const SMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: ${v.lgSpacing}
    //ok
`
export const STitle = styled.div`
    font-size: 20px;
    font-weight: 700;
`
export const SMenu = styled.div`
    display: flex;
    justify-content: center;
    //ok
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
    width: 348px;
    //ok
`
export const SContainer = styled.div`
    background-color: #FFFFFF;
    padding-left: ${v.mdSpacing};
    padding-right: ${v.mdSpacing};
    margin-top: ${v.lgSpacing};
    width: 100%;
    height: 478px;
    border-radius: 16px;
`
export const SCardList =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    //ok
`

export const SCardItems= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    //ok
`

export const SUserList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`