import styled from "styled-components";
import { v } from "../../styles/variables";

export const SSidebar = styled.div`
    width: ${v.sidebarWidth};
    background: ${({theme}) => theme.bg};
    height: 1024px;
    padding: 32px 94px 32px 32px;
    position: relative;
`

export const SLogo = styled.div`
    width: 166px;
    height: 56px;
    gap: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 10px; */
    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};

    .logo-text {
        font-weight: bold;
        font-size: 20px;
    }
    .logo-desc {
        font-size: 10px;
    }
`