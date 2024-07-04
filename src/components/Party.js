import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import { CardComponent } from './cards/CardComponent';
import { CardIcon } from './cards/CardIcon';
import Swal from 'sweetalert2';

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#855D41',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  marginTop: '20px'
});

const MusicIconContainer = styled(Box)({
  position: 'absolute',
  top: '-40px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#fff',
  borderRadius: '50%',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60px',
  height: '60px',
});

const MusicIcon = styled(LibraryMusicIcon)({
  fontSize: '2rem',
  color: '#d28e79',
}); 

const SuggestButton = styled(Button)({
  backgroundColor: '#d28e79',
  color: '#fff',
  marginTop: '20px',
  width:'80%',
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
  maxWidth: '400px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  padding: '30px',
  textAlign: 'center'
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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('song', song);
    formData.append('link', link);

    try {
      const response = await fetch('https://formspree.io/f/xrbzgabv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      if (response.ok) {
        Swal.fire({
          title: 'Éxito',
          text: 'Sugerencia enviada con éxito',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar la sugerencia',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar la sugerencia',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }
    handleClose();
  };

  return (
    <>
      <CardComponent>
        <CardIcon>
          <MusicIcon />
        </CardIcon>
        <TitleText>
          MÚSICA
        </TitleText>
        <Typography variant="body1">
          ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
        </Typography>
        <SuggestButton onClick={handleOpen}>
          Sugerir Canción
        </SuggestButton>
      </CardComponent>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <MusicIconContainer>
            <MusicIcon />
          </MusicIconContainer>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#855D41', marginTop: '40px', marginBottom: '20px' }}>
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
