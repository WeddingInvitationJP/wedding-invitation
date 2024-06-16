import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import TitleSection from './TitleSection';

const PartyContainer = styled(Box)({
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  margin: '20px 0',
  textAlign: 'center',
});

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#855D41',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const MusicIcon = styled(LibraryMusicIcon)({
  fontSize: '2rem',
  color: '#d28e79',
  marginBottom: '10px',
});

const SuggestButton = styled(Button)({
  backgroundColor: '#d28e79',
  width: '80%',
  color: '#fff',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#b36b53',
  },
});

const ModalContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  padding: '20px',
  textAlign: 'center',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  right: '10px',
});

const Party = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [link, setLink] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const email = 'example@example.com'; // Reemplaza con tu correo electrónico
    const subject = 'Sugerencia de Canción';
    const body = `Nombre: ${name}%0A%0ACanción y autor: ${song}%0A%0AEnlace: ${link}`;
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    handleClose();
  };

  return (
    <>
      <TitleSection title="La fiesta" />

      <PartyContainer>
        <TitleText>
         <MusicIcon sx={{marginRight: 2}}/>
         MÚSICA
        </TitleText>
        <Typography variant="body1" style={{marginTop: 20}}>
          ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
        </Typography>
        <SuggestButton onClick={handleOpen}>
          Sugerir Canción
        </SuggestButton>
      </PartyContainer>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <MusicIcon sx={{ fontSize: '3rem', marginBottom: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#855D41', marginBottom: '20px' }}>
            Sugerir Canción
          </Typography>
          <TextField
            fullWidth
            label="Tu nombre"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Nombre de canción y autor"
            variant="outlined"
            margin="normal"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MusicNoteIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Link de YouTube, Spotify, etc."
            variant="outlined"
            margin="normal"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />
          <SuggestButton onClick={handleSubmit}>
            Sugerir Canción
          </SuggestButton>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Party;
