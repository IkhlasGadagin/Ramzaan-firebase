import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase/firebaseConfig"
import Test from './components/Test';
// import Card from './components/Card';
// import CouponCode from './components/CouponCode';

const db = getDatabase(app)

const putData = function () {
  set(ref(db, "user/ikhlas"), {
    id: 1,
    name: "Ikhas",
    age: 25
  })

}
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



        <Footer sx={{ width: '100%' }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
