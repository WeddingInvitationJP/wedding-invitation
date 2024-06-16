import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox, FormControlLabel, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TitleSection from './TitleSection';

const ConfirmationContainer = styled(Box)({
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
});

const ConfirmButton = styled(Button)({
  backgroundColor: '#d28e79',
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
  maxWidth: '400px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  padding: '30px',
  textAlign: 'center',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  right: '10px',
});

const IconButtonStyled = styled(IconButton)({
  color: '#d28e79',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const BusIcon = styled(DirectionsBusIcon)({
  fontSize: '2rem',
  color: '#d28e79',
  marginRight: '8px',
});

const Confirmation = () => {
  const [needsTransport, setNeedsTransport] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSendMessage = (recipient) => {
    const baseMessage = `Confirmación de asistencia${needsTransport ? ' y necesito transporte' : ''}`;
    const whatsappUrl = `https://wa.me/${recipient}?text=${encodeURIComponent(baseMessage)}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  return (
    <>
      <TitleSection title="Confirmación y transporte" />
      <ConfirmationContainer>
        <TitleText>¡Allí nos vemos!</TitleText>
        <Typography variant="body1" sx={{ marginTop: '20px', color: '#855D41' }}>
          Estamos agradecidos con su presencia y nos encantará contar con ustedes en ese día tan especial.
        </Typography>
        <ConfirmButton onClick={handleOpen}>
          Confirmar asistencia
        </ConfirmButton>
      </ConfirmationContainer>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#855D41', marginBottom: '20px' }}>
            Agradecemos tu asistencia
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', color: '#855D41' }}>
            No queremos que te preocupes por nada. Habrá autobús para ir al evento y varios turnos de vuelta.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <BusIcon />
            <FormControlLabel
              control={<Checkbox checked={needsTransport} onChange={() => setNeedsTransport(!needsTransport)} />}
              label="Necesito transporte"
            />
          </Box>
          <Typography variant="body2" sx={{ marginBottom: '30px', color: '#855D41' }}>
            Si necesitas transporte, marca la casilla.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButtonStyled onClick={() => handleSendMessage('+34687665131')}> {/* Reemplaza con el número del novio */}
              <AccountCircleIcon sx={{ fontSize: '4rem' }} />
              <Typography variant="body2" sx={{ color: '#855D41', marginTop: '10px' }}>Fran</Typography>
            </IconButtonStyled>
            <IconButtonStyled onClick={() => handleSendMessage('+34663655443')}> {/* Reemplaza con el número de la novia */}
              <PersonIcon sx={{ fontSize: '4rem' }} />
              <Typography variant="body2" sx={{ color: '#855D41', marginTop: '10px' }}>Laura</Typography>
            </IconButtonStyled>
          </Box>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Confirmation;
