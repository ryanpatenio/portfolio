import { Box, Typography, Grid, Paper } from '@mui/material';
import Avatar from './img/avatar.jpg'

function Intro() {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
            {/* Text Section */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h1" gutterBottom sx={{ my: 5 }}>
                    Hello, I'm Ryan
                </Typography>
                <Typography variant="h5">
                    I'm a aspiring PHP Developer
                </Typography>
            </Box>

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
                    src={Avatar} // Replace with your image path
                    alt="Ryan's image"
                    style={{
                        width: '100%', // Makes sure it scales responsively
                        height: 'auto',
                        borderRadius: '10px', // Optional: rounded corners for the image
                    }}
                />
            </Box>
        </Box>
    );
}

export default Intro;
