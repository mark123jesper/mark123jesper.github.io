import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { useState } from 'react';
import Main from './Components/Main';
import { GlobalStyle } from './Styles/GlobalStyle'

let lightTheme = createTheme({
    palette: {
        mode: 'light',
        typography: {
            fontFamily: `"Ubuntu", "Helvetica", "Arial", sans-serif`,
        },
        primary: {
            main: '#182F4E',
        },
        secondary: {
            main: '#278ea5',
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

let darkTheme = createTheme({
    palette: {
        mode: 'dark',
        typography: {
            fontFamily: `"Ubuntu", "Helvetica", "Arial", sans-serif`,
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

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

const App = () => {
    const [darkmode, setDarkmode] = useState(true);

    return (
        <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <CssBaseline />
            <Main functions={[darkmode, setDarkmode]} />
        </ThemeProvider>
    );
}
export default App;
