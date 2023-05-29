import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        background: #E5E5E5;
        width: 1456px;
        margin:0 auto;
    }
    #root{
        /* background: ${({theme}) => theme.bg4}; */
        color: ${({theme}) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
        margin-top: 10px;
    }
`