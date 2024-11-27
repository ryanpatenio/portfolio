import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { Email, LinkedIn, GitHub, Twitter, Instagram, Facebook } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 3,
        px: 2,
        textAlign: 'center',
        
      }}
    >
      {/* Contact Info */}
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Email: <a href="mailto:ryanpatenio06@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>ryanpatenio06@gmail.com</a>
      </Typography>

      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <IconButton
          href="https://www.linkedin.com/in/ryan-patenio-53380924b/"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.text.primary }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://github.com/ryanpatenio"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.text.primary }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://twitter.com/ryanCodeRed"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.text.primary }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://instagram.com/ryanpatinsonn"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.text.primary }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://facebook.com/ryananderez"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.text.primary }}
        >
          <Facebook />
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        &copy; {new Date().getFullYear()} Ryan A. Patenio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
