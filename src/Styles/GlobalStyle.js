import {
    createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle `
    :root {
        --primary-color: #126a8e;
        --secondary-color: #17c79a;
        --border-color: #255F66;
        
        --font-color-dark: #F6F5F5;
        --sidebar-dark: #143D44;
        --background-color-dark: #132C33;
        
        --font-color-light: #132C33;
        --sidebar-light: #D3E0EA;
        --background-color-light: #1687A7;
       
        --white-color: #fff;
        --black-color: #000;
        --font-family: 'Ubuntu', sans-serif, monospace;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.1rem;
        color: lightgray;
    }

    * a:hover,
    * i:hover {
        color: white
    }

    body {
        font-family: var(--font-family);
        background-color: var(--background-color-dark);
    }
`;

export default GlobalStyle;