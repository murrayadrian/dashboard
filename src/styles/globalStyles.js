import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        background: #E5E5E5;
    }
     #root{
        background: ${({theme}) => theme.bg4};
        color: ${({theme}) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
        height: calc(100vh - 60px);
        width: calc(100% - 120px);
        margin:0 auto;
        margin-top: 30px;
    }
`