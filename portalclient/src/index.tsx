// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

// Add a global CSS to remove default body margin and padding
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.backgroundColor = 'black';
document.body.style.color = 'rgb(150,150,150)';

// Create a theme
const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


