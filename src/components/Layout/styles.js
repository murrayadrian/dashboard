import styled from "styled-components";
import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
    height: 100vh;
`

export const SContainer = styled.div`
    padding: ${v.lgSpacing};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: calc(100% - 300px);
`