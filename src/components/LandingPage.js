import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import floralHeader from '../assets/floral_cabecera.png';

//import backgroundImage from '../assets/landing-background.jpg'; // Asegúrate de que la ruta sea correcta

const LandingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: 'rgb(255, 245, 232)',
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
  fontSize: '15rem',
  color: '#855D41',
  opacity: 0.1,
  top: '57%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const LandingPage = ({ onEnter }) => {
  return (
    <LandingContainer>
      <>
        <img width={'110%'} src={floralHeader} />
        <BackgroundSymbol variant="h2">&</BackgroundSymbol>
        <Typography variant="h5">Bienvenidos a la invitación de</Typography>
        <Box sx={{ mb: 5, position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontSize: '8rem', fontFamily: 'Cosmopolitan Script, sans-serif',  }}>
            Fran
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '8rem', fontFamily: 'Cosmopolitan Script, sans-serif' }}>
            Laura
          </Typography>
        </Box>
      </>
      <Typography variant="subtitle1">La música de fondo es parte de la experiencia</Typography>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LandingButton variant="contained" style={{}} onClick={onEnter}>
          Ingresar
        </LandingButton>
      </motion.div>
    </LandingContainer>
  );
};

export default LandingPage;
