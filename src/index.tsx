import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "styled-components"
import theme from "./global/theme"
import GlobalStyles from "./global/stylesGlobal"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

