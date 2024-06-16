import React from 'react';
import { Box, Typography } from '@mui/material';

const EventDetails = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Detalles del Evento
      </Typography>
      <Typography variant="h6">
        Fecha: 25 de diciembre de 2024
      </Typography>
      <Typography variant="h6">
        Lugar: Jardines del Sol, Madrid
      </Typography>
    </Box>
  );
};

export default EventDetails;
