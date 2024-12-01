import React from 'react'
import Box from '@mui/material/Box'; //material UI

import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'




const MainContent = () => {

  return (
    <>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div  style={{ minHeight: '100vh' }} data-aos="fade-right" id='home'>
              <Intro />
          </div>
          <div  style={{ minHeight: '100vh' }} data-aos="fade-left" id='about'>
              <About/>
          </div>
          <div  style={{ minHeight: '100vh' }} data-aos="zoom-in" id='projects'>
          <Projects />

          </div>

          <div  data-aos="fade-right" id='footer'>
            <Footer />

          </div>

        
        </Box>

        
    
    </>
  )
}

export default MainContent