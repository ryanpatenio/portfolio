

import React, { useRef, useEffect, useState } from 'react';
import { alpha, styled } from '@mui/material/styles'; //material UI
import Box from '@mui/material/Box'; //material UI
import AppBar from '@mui/material/AppBar'; //material UI
import Toolbar from '@mui/material/Toolbar'; //material UI
import Button from '@mui/material/Button'; //material UI
import IconButton from '@mui/material/IconButton'; //material UI
import Container from '@mui/material/Container'; //material UI
import ColorModeIconDropdown from '../theme/ColorModeIconDropdwn';
import MenuItem from '@mui/material/MenuItem';//material UI
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu' //material UI
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'; //material UI
import Divider from '@mui/material/Divider'; //material UI
import SitemarkIcon from './SiteMarkIcon';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { Typography } from '@mui/material';




const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
      ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
      : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
  }));
  


export default function AppAppBar () {
    const [open, setOpen] = React.useState(false);

    const aboutMeRef = useRef(null); // Reference to the About Me section
    const [isAboutVisible, setIsAboutVisible] = useState(false); // State to track visibility
    
    
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIsAboutVisible(entry.isIntersecting); // Update visibility based on intersection
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutMeRef.current) {
        observer.observe(aboutMeRef.current);
    }

    return () => {
        if (aboutMeRef.current) {
            observer.unobserve(aboutMeRef.current);
        }
    };
}, []);

  return (
    <AppBar
   position='fixed'
    enableColorOnDark
    sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
      mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      backgroundColor: isAboutVisible ? 'primary.main' : 'transparent', // Change color
      boxShadow: isAboutVisible ? 4 : 0, // Add shadow when sticky
    }}
    >
        <Container maxWidth="lg">
            <StyledToolbar variant="dense" disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Typography
                variant="h5"
                sx={(theme) => ({
                    ml: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                })}
            >
                Ryan.
            </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                
                  
                </Box>
            </Box>


            <Box
                sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
                }}
            >
                    <Button variant="text" color={isAboutVisible ? 'primary' : 'info'} sx={{fontSize:'1.1rem' , mr:2}}>
                        Home
                    </Button>
                    <Button variant="text" color={isAboutVisible ? 'primary' : 'info'}sx={{fontSize:'1.1rem' ,mr:2}}>
                        About
                    </Button>
                    <Button variant="text" color={isAboutVisible ? 'primary' : 'info'} sx={{fontSize:'1.1rem',mr:2}}>
                        Projects
                    </Button>
                    <Button variant="text" color={isAboutVisible ? 'primary' : 'info'} sx={{fontSize:'1.1rem' ,mr:2}}>
                        Contact
                    </Button>

               <Tooltip title="Theme" TransitionComponent={Zoom} >
               <ColorModeIconDropdown />

               </Tooltip>
               
            </Box>

             <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                 <ColorModeIconDropdown size="medium" />
                 <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                 <MenuIcon />
            </IconButton>
                <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                    top: 'var(--template-frame-height, 0px)',
                    },
                }}
                >
                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                    >
                    <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />    {/* cross icon */}
                    </IconButton>
                    </Box>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Contact</MenuItem>
                  
                    <Divider sx={{ my: 3 }}/>
                    <MenuItem>
                    <Button color="primary" variant="contained" fullWidth>
                        Sign up
                    </Button>
                    </MenuItem>
                    <MenuItem>
                    <Button color="primary" variant="outlined" fullWidth>
                        Sign in
                    </Button>
                    </MenuItem>
                </Box>
                </Drawer>

             </Box>
                
            </StyledToolbar>
        </Container>

    </AppBar>
  )

}