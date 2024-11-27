import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Container from '@mui/material/Container';
import { useEffect } from 'react';

import Footer from './components/Footer';
import MainContent from './components/MainContent';

export default function Blog(props) {

  useEffect(() => {
    // Initialize AOS
    window.AOS.init({
        duration: 1500, // Animation duration in ms
        once: false, 
    });
}, []);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >

      <MainContent />
       
      </Container>
     
    </AppTheme>
  );
}
