import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const RSVP = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Confirmar Asistencia
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/?text=Confirmo%20mi%20asistencia%20a%20la%20boda"
        target="_blank"
      >
        Confirmar por WhatsApp
      </Button>
    </Box>
  );
};

export default RSVP;
