import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main/index.css';
import App from './components/pages/home/App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { storytellerTheme } from './styles/main/theme';

const theme = createTheme(storytellerTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={ theme }>

      <BrowserRouter>
        <App />
      </BrowserRouter>

  </ThemeProvider>
);


