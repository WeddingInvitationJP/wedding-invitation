import React from 'react';
import { Box, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PauseIcon from '@mui/icons-material/Pause';
import Countdown from './Countdown';
import Ceremony from './Ceremony';
import Party from './Party';
import Confirmation from './Confirmation';
import Detail from './Detail';
import backgroundImage from '../assets/example.jpg'; // Asegúrate de que la ruta sea correcta

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  background: '#fff',
  textAlign: 'center',
  padding: '0 20px',
  fontFamily: "'Cinzel', serif",
  color: '#855D41', // Color marrón cálido
  position: 'relative',
});

const BackgroundImageContainer = styled(Box)({
  width: '100vw', // Ocupar todo el ancho de la ventana
  height: '40vh', // Ajusta la altura según necesites
  background: `url(${backgroundImage}) no-repeat center center`,
  backgroundSize: 'cover',
  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
  position: 'relative',
  marginBottom: '-5vh', // Solapar un poco la imagen de los novios
});

const ContentBox = styled(Box)({
  width: '100%',
  padding: '20px',
  marginTop: '20px',
  position: 'relative',
});

const AmpersandSymbol = styled(Typography)({
  position: 'absolute',
  fontSize: '10rem',
  color: '#855D41',
  opacity: 0.1,
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 0,
});

const DateTypography = styled(Typography)({
  marginTop: '20px',
  padding: '0 10px',
  borderTop: '2px solid #855D41', // Borde superior
  borderBottom: '2px solid #855D41', // Borde inferior
  display: 'inline-block', // Para ajustar el ancho del borde a solo el contenido
});

const FloatingButton = styled(IconButton)({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#d28e79',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#b36b53',
  },
});

const MenuButton = styled(IconButton)({
  position: 'fixed',
  top: '20px',
  right: '20px',
  backgroundColor: '#d28e79',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#b36b53',
  },
});

const MainPage = () => {
  const [musicPlaying, setMusicPlaying] = React.useState(true);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    // Aquí puedes añadir la lógica para reproducir/pausar la música
  };

  return (
    <MainContainer>
        <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
            <MenuButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
            </MenuButton>
            </Toolbar>
        </AppBar>
        <BackgroundImageContainer />
        <DateTypography style={{marginTop: '24%'}}variant="h6">27.09.2024</DateTypography>
        <ContentBox>
        <AmpersandSymbol>&</AmpersandSymbol>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', position: 'relative', zIndex: 1, marginTop: 2 }}>
            FRAN
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', position: 'relative', zIndex: 1 }}>
            LAURA
        </Typography>
      </ContentBox>
      <Typography variant="subtitle1" sx={{ mt: 2, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
          "Todos somos mortales, hasta el primer beso y la segunda copa de vino"
        </Typography>
      <Countdown eventDate="2024-09-27T19:30:00" />
      <Ceremony />
      <Party />
      <Confirmation />
      <Detail />
      <FloatingButton onClick={toggleMusic}>
        {musicPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </FloatingButton>
    </MainContainer>
  );
};

export default MainPage;
