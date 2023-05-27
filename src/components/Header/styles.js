import styled from "styled-components";
import { v } from "../../styles/variables";

export const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`
export const SSearch = styled.div`

    input {
        padding: 0 ${v.smSpacing};
        font-size: 16px;
        width: 461px;
        height: 56px;
        border-radius: 35px;
        border: none;
    }
    position:relative;
`
export const SSearchIcon = styled.div`
    padding:10px;
    cursor: pointer;
    position:absolute;
    left:16px;
    top:16px;
    width:25px;
    height: 25px;

    svg {
        width:25px;
        height: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`
export const SPlaceholder = styled.div`
    position:absolute;
    left:50px;
    top:20px;
`

export const SUser = styled.div`
    display: flex;
    gap: 30px;
`