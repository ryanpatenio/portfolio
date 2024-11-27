import { Box, Typography } from '@mui/material';
import { useState, useEffect} from 'react'
import Avatar from './img/avatar.jpg'

function Intro() {

    const text = "PHP Developer"; // Text to animate
    const [displayText, setDisplayText] = useState(''); // Text currently displayed
    const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting text
    const [index, setIndex] = useState(0); // Current character index
    const [blink, setBlink] = useState(true); // Blinking caret state
    const [deletionDelayReached, setDeletionDelayReached] = useState(false); // For 2 seconds delay


    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100; // Speed when typing or deleting
        const timer = setTimeout(() => {
          if (!isDeleting && index < text.length) {
            // Typing forward
            setDisplayText((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
          } else if (isDeleting && index > 0) {
            // Deleting backward
            setDisplayText((prev) => prev.slice(0, -1));
            setIndex((prev) => prev - 1);
          } else if (index === text.length && !deletionDelayReached) {
            // Wait for 2 seconds before deleting starts
            setTimeout(() => {
              setIsDeleting(true);
              setDeletionDelayReached(true); // After this set to true, start deleting
              setBlink(true);
              setTimeout(() => setBlink(false), 1000);
            }, 2000); // 2-second delay
          } else if (index === 0 && isDeleting) {
            // Restart typing again after deletion
            setIsDeleting(false);
            setDeletionDelayReached(false); // Reset delay for next cycle
          }
        }, typingSpeed);
    
        return () => clearTimeout(timer);
      }, [index, isDeleting, text, deletionDelayReached]);
    
      useEffect(() => {
        const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
        return () => clearInterval(blinkInterval);
      }, []);
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
            {/* Text Section */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h1" gutterBottom sx={{ my: 5,display: 'inline' }} component="span">
                    Hello, I'm Ryan
                </Typography>
                <Typography variant="h5">
                I'm an Aspiring {displayText}

                    <Typography
                        component="span"
                        sx={{
                        display: 'inline',
                        fontWeight: 'bold',
                        fontSize: '1.5em',
                        visibility: blink ? 'visible' : 'hidden', // Blinking effect
                        ml: 0.2,
                        }}
                    >
                        |
                    </Typography>
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
