import React from 'react'
import Box from '@mui/material/Box'; //material UI
import { Typography } from '@mui/material';
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'




const MainContent = () => {

  return (
    <>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div data-aos="fade-right">
            <Intro />
        </div>
        <div data-aos="fade-left">
            <About/>
        </div>
        <div data-aos="zoom-in">
        <Projects />

        </div>

        <div data-aos="fade-right">
          <Footer />

        </div>

        
        </Box>

        
    
    </>
  )
}

export default MainContent