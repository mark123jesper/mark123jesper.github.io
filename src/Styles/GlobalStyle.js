import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Ubuntu", "Helvetica", "Arial", sans-serif;
    }

    body {
        transition: all 0.25s linear;
    }
    body::-webkit-scrollbar {
        width: .4em;
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: #ab7a3655;
    }

    body::-webkit-scrollbar-thumb:hover {
        background-color: #ab7a36;
        outline: 1px solid slategrey;
    }
`;