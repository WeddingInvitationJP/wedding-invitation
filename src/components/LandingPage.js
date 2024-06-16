import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
//import backgroundImage from '../assets/landing-background.jpg'; // Asegúrate de que la ruta sea correcta

const LandingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
 // background: `url(${backgroundImage}) no-repeat center center`,
  backgroundSize: 'cover',
  textAlign: 'center',
  padding: '0 20px',
  fontFamily: "'Cinzel', serif",
  color: '#855D41', // Color marrón cálido
});

const LandingButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#d28e79', // Color de fondo del botón
  color: '#fff',
  fontFamily: "'Cinzel', serif",
  '&:hover': {
    backgroundColor: '#b36b53', // Color de fondo del botón al pasar el ratón
  },
});

const BackgroundSymbol = styled(Typography)({
  position: 'absolute',
  fontSize: '12rem',
  color: '#855D41',
  opacity: 0.1,
  top: '44%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const LandingPage = ({ onEnter }) => {
  return (
    <LandingContainer>
      <BackgroundSymbol variant="h1">&</BackgroundSymbol>
      <Typography variant="h5">Bienvenidos a la invitación de</Typography>
      <Box sx={{ mb: 10, position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', marginTop: 2 }}>
          FRAN
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', marginTop: 3 }}>
          LAURA
        </Typography>
      </Box>
      <Typography variant="subtitle1">La música de fondo es parte de la experiencia</Typography>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LandingButton variant="contained" style={{ fontFamily: "'Cinzel', serif",}} onClick={onEnter}>
          Ingresar
        </LandingButton>
      </motion.div>
    </LandingContainer>
  );
};

export default LandingPage;
