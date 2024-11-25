import React from 'react'
import Box from '@mui/material/Box'; //material UI
import { Typography } from '@mui/material';
import Intro from './Intro'
import About from './About'



const MainContent = () => {
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Intro />
            <About/>
        </Box>
    </>
  )
}

export default MainContent