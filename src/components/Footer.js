import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', backgroundColor: 'primary.main', color: 'white' }}>
      <Typography variant="body2">
        © 2024 Boda de Ana y Carlos
      </Typography>
    </Box>
  );
};

export default Footer;
