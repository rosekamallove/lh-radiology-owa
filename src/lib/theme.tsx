import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F2994A',
      dark: '#af6727',
      light: '#ffb06a',
    },
    secondary: {
      main: '#00B3A6',
      dark: '#019592',
      light: '#70EFDE',
    },
    text: {
      primary: '#fff',
      secondary: 'rbga(0, 0, 0, 0.85)',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial'].join(','),
  },
  components: {
  MuiInput: {
  
  }
  }
})
