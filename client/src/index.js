import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import './styles/main/index.css';
import { storytellerTheme } from './styles/main/theme';
import { UserProvider } from './context/UserContext';
import { GenreProvider } from './context/GenreContext';
import App from './App';
import { AuthorProvider } from './context/AuthorContext';

const theme = createTheme(storytellerTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={ theme }>
    <UserProvider>
      <GenreProvider>
        <AuthorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthorProvider>
      </GenreProvider>
    </UserProvider>
  </ThemeProvider>
);
