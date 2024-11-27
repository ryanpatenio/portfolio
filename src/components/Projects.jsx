import {useState} from 'react'
import Card from '@mui/material/Card';
import { Box, CardContent, Dialog, DialogTitle, DialogContent, Typography, ImageList, ImageListItem, Divider, CircularProgress } from '@mui/material';


import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Projects = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          author: '@katie_wasserman',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          author: '@silverdalex',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          author: '@shelleypauls',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          author: '@peterlaster',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          author: '@southside_customs',
        },
      ];
      const theme = useTheme();
      const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
      const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    
      // Determine the number of columns based on screen size
      const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;


      const [open, setOpen] = useState(false); // Controls the modal visibility
      const [selectedItem, setSelectedItem] = useState(null); // Stores the selected image details
      const [loading, setLoading] = useState(false); // Tracks image loading state

      const handleOpen = (item) => {
            setSelectedItem(item); // Set the clicked item
            setLoading(true);      // Start loading
            setOpen(true);         // Open the modal
        };
        const handleClose = () => {
            setOpen(false);        // Close the modal
            setSelectedItem(null); // Clear the selected item
            setLoading(false);     // Reset loading state
          };
        
          const handleImageLoad = () => {
            setLoading(false); // Set loading to false once the image is loaded
          };

  return (
    <>
   <Divider textAlign="center" sx={{my:2}}>
        <Typography variant="h2">Projects</Typography>
      </Divider>
    <Card>
    
    <CardContent>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column', // Layout is managed by ImageList
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            borderRadius: 2,
        }}
        >
         {/* Responsive Image List */}
         <ImageList cols={cols} gap={5} sx={{ width: '100%' }}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleOpen(item)} // Open modal on click
              sx={{
                cursor: 'pointer', // Pointer cursor on hover
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(1.1)', // Zoom effect
                },
              }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  transition: 'transform 0.3s ease-in-out', // Smooth zoom animation
                  width: '100%',
                  height: '100%',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

            {/* Modal for Image Details */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{selectedItem?.title}</DialogTitle>
                <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                {/* Show spinner while loading */}
                {loading && <CircularProgress sx={{ marginBottom: 2 }} />}
                <Box
                    component="img"
                    src={selectedItem?.img}
                    alt={selectedItem?.title}
                    onLoad={handleImageLoad} // Hide spinner once the image loads
                    sx={{
                    display: loading ? 'none' : 'block', // Hide image while loading
                    width: '100%',
                    borderRadius: '4px',
                    marginBottom: 2,
                    }}
                />
                <Typography variant="body1">{selectedItem?.description}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                    By: {selectedItem?.author}
                </Typography>
                </DialogContent>
            </Dialog>

        </CardContent>    
    </Card>
    
    </>
  )
}

export default Projects