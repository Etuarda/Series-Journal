import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#E50914' },
    secondary: { main: '#D4AF37' },
    background: { default: '#1A0505', paper: '#2D0A0A' },
    text: { primary: '#FDFBF7', secondary: '#D4AF37' }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Pinyon Script', cursive",
      fontWeight: 400,
      fontSize: '4rem',
      '@media (min-width:600px)': { fontSize: '6rem' },
      color: '#D4AF37'
    },
    h2: {
      fontFamily: "'Pinyon Script', cursive",
      fontWeight: 400,
      fontSize: '3rem',
      '@media (min-width:600px)': { fontSize: '4.5rem' },
      color: '#2D0A0A'
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontSize: '1.5rem',
      '@media (min-width:600px)': { fontSize: '2.125rem', letterSpacing: '4px' },
      color: '#FDFBF7'
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontStyle: 'italic',
      letterSpacing: '1px'
    }
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          fontWeight: 700
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2D0A0A',
          border: '2px solid #D4AF37',
          backgroundImage: 'none'
        }
      }
    }
  }
})

export default theme
