import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Main from './Components/Main';
import {GlobalStyle, darkTheme, lightTheme} from './Styles/GlobalStyle'

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
