import styled from "styled-components";
import { v } from "../../styles/variables";


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
        inset: 0;
        margin: auto;
    }
`
export const SPlaceholder = styled.div`
    position:absolute;
    left:50px;
    top:20px;
`