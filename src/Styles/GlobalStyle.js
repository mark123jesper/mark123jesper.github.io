import { createGlobalStyle } from "styled-components";
import { createTheme } from '@mui/material';

export const GlobalStyle = createGlobalStyle`

    body {
        transition: all 0.25s linear;
    }
`;

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        typography: {
            fontFamily: '"Ubuntu", "sans-serif", "monospace"',
        },
        primary: {
            main: '#278ea5',
        },
        secondary: {
            main: '#21E6C1',
        },
        background: {
            default: '#98DED9',
            paper: '#98DED9',
        },
        text: {
            hint: 'rgba(27,38,44,0.5)',
            disabled: 'rgba(27,38,44,0.7)',
            primary: '#1b262c',
            secondary: '#1b262c',
        },
        divider: '#0F4C75',
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        typography: {
            fontFamily: '"Ubuntu", "sans-serif", "monospace"',
        },
        primary: {
            main: '#BBE1FA',
        },
        secondary: {
            main: '#C7FFD8',
        },
        background: {
            default: '#071E3D',
            paper: '#071E3D',
        },
        text: {
            hint: 'rgba(246,246,246,0.5)',
            disabled: 'rgba(246,246,246,0.7)',
            primary: '#f6f6f6',
            secondary: '#f6f6f6',
        },
        divider: '#0F4C75',
    }
});