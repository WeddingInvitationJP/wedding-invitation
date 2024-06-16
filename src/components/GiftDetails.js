import React from 'react';
import { Box, Typography } from '@mui/material';

const GiftDetails = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Cómo Hacer un Detalle
      </Typography>
      <Typography variant="body1">
        Si deseas hacernos un detalle, aquí tienes algunas ideas...
      </Typography>
      <Typography variant="body1">
        <ul>
          <li>Lista de regalos en Amazon</li>
          <li>Aporte para la luna de miel</li>
          <li>Donación a una causa benéfica</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default GiftDetails;
