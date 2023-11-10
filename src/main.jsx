import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./Styles/global.js";
import theme from "./Styles/theme.js";
import { MyRoutes } from './routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MyRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
