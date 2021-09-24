import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Styles/GlobalStyle';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
