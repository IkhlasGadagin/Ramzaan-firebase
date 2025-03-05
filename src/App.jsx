import React from 'react';
import Header from './components/Header';
// import TeamSection from './components/TeamSection';
// import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create theme for consistent colors and spacing
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
      dark: '#4F46E5',
    },
    secondary: {
      main: '#2B2D42',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: '#f8f9fa'
      }}>
        <Header />
        {/* <Box component="main" >
          <TeamSection sx={{ width: '100%' }}/>
          <ServicesSection sx={{ width: '100%' }}/>
        </Box> */}
        <Footer sx={{ width: '100%' }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
