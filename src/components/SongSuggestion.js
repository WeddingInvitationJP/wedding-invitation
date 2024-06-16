import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SongSuggestion = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sugerir Canción
      </Typography>
      <TextField
        label="Nombre de la Canción"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary">
        Enviar Sugerencia
      </Button>
    </Box>
  );
};

export default SongSuggestion;
