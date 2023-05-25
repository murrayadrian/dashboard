import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.bg4};
        color: ${({theme}) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
        height: 100vh;
    }
`