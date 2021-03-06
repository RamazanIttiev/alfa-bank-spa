import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF59D',
    },
    secondary: {
      main: '#fff',
    },
    type: 'dark',
    background: {
      default: '#191A1C',
      paper: '#2f3237',
      hover: '#fff6aa',
    },
    text: {
      primary: '#ffffff',
      secondary: '#00000',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Open Sans"',
    h1: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.54,
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});
