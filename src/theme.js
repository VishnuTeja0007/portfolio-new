// theme.js
import { createTheme } from '@mui/material/styles';

const commonPalette = {
  primary: {
    main: '#a93800',
  },
  secondary: {
    main: '#00464b',
  },
  info: {
    main: '#00ffff',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e6f4f1',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#333333',
    },
    ...commonPalette,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#00464b',
      paper: '#062c2e',
    },
    text: {
      primary: '#e6f4f1',
      secondary: '#cfd8dc',
    },
    ...commonPalette,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});
