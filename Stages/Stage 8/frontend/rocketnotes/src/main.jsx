import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { SingIn } from './pages/SingIn';
import { SingUp } from './pages/SingUp';
import { Profile } from './pages/Profile';

import GlobalStyles from './styles/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
