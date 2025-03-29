import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary">
      © {new Date().getFullYear()} Jhelum OMS. Smart Wealth. Smart Tools.
    </Typography>
  </Box>
);

export default Footer;
