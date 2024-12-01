import React, { useRef } from 'react'; // Don't forget to import useRef
import { Box, Typography, List, ListItem, ListItemText,Divider, ListItemIcon,useTheme } from '@mui/material';
import Avatar from './img/avatar.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'; //material UI

export default function About(){
    const theme = useTheme(); // Access the current theme

    const aboutMeRef = useRef(null);
    const skills = [ "PHP", "HTML", "CSS", "JavaScript", "React", "JQuery","Ajax","Mysql"]; 
     
    const firstHalf = skills.slice(0, 4); 
    const secondHalf = skills.slice(4); 
    
   

    return (
       <>
<Card ref={aboutMeRef}>
    <CardContent>
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 3,
                padding: 2,
                borderRadius: 2,
            })}
        >
            {/* Image Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={Avatar} 
                    alt="Ryan's image"
                    style={{
                        width: '50%', // Makes sure it scales responsively
                        height: 'auto',
                        borderRadius: '10px', // Optional: rounded corners for the image
                    }}
                />
            </Box>

            {/* Text Section */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h1" gutterBottom sx={{ my: 2 }}>
                    About Me
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    As an aspiring PHP developer, I am passionate about creating dynamic, efficient, and scalable web applications. With a strong foundation in PHP, I am dedicated to continuously learning and improving my skills to build solutions that meet the evolving needs of users. I thrive on problem-solving and enjoy tackling new challenges, always striving to contribute to the success of every project I work on.
                </Typography>
                <Divider sx={{mt:4}}>
                    <Typography variant='h4'>Skills</Typography>
                </Divider>
                <Box sx={{ display: 'flex' }}>
                    {/* First Column for first 4 skills */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                            <List sx={{ paddingLeft: 0 }}>
                            {firstHalf.map((skill, index) => (
                                <ListItem key={index}>
                                {/* Dot as ListItemIcon */}
                                <ListItemIcon sx={{ minWidth: 0, marginRight: 2 }}>
                                    <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.text.primary, // Customize dot color here
                                    }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={skill} />
                                </ListItem>
                            ))}
                            </List>
                        </Box>

                   {/* Second Column for remaining skills */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                        <List sx={{ paddingLeft: 0 }}>
                        {secondHalf.map((skill, index) => (
                            <ListItem key={index}>
                            {/* Dot as ListItemIcon */}
                            <ListItemIcon sx={{ minWidth: 0, marginRight: 2 }}>
                                <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.text.primary, // Customize dot color here
                                }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={skill} />
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                    
                    
                </Box>
                

                <Box sx={{display:'flex',
                    justifyContent:{xs:'center',md:'flex-center'}, //centered for mobile, center for desktop
                    marginTop:5 }} >
                    <Button variant="contained" sx={{ px: 4, py: 1.5 }}>Download CV</Button>
                </Box>
                
            </Box>
        </Box>

    </CardContent>
</Card>
  
       </> 

    );
}