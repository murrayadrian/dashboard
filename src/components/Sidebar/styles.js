import styled from "styled-components";
import { v } from "../../styles/variables";

export const SSidebar = styled.div`
    width: ${v.sidebarWidth};
    background: ${({theme}) => theme.bg};
    height: 1024px;
    padding: 32px 94px 32px 32px;
    position: relative;
`

