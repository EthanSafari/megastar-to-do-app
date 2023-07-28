import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(41,38,57)',
      contrastText: 'rgb(226,225,228)',
    },
    secondary: {
      main: 'rgb(226,225,228)',
    },
    background: {
      default: '#070417',
      paper: 'rgb(41,38,57)',
    },
    text: {
      primary: 'rgb(255,255,255)',
      secondary: 'rgb(255,255,255)',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
