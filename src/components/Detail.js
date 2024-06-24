import React, { useState } from 'react';
import { Box, Typography, Button, Modal, IconButton, TextField } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import TitleSection from './TitleSection';
import { CardComponent } from './cards/CardComponent';
import { CardIcon } from './cards/CardIcon';

const DetailContainer = styled(Box)({
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  margin: '20px 0',
  textAlign: 'center',
});

const ThankYouText = styled(Typography)({
  //fontWeight: 'bold',
  //fontSize: '1.2rem',
  color: '#855D41',
});

const DetailButton = styled(Button)({
  backgroundColor: '#d28e79',
  color: '#fff',
  width: '80%',
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

const CopyMessage = styled(Typography)({
  color: '#855D41',
  fontSize: '0.8rem',
  marginTop: '10px',
});
const GiftIcon = styled(CardGiftcardIcon)({
  fontSize: '2rem',
  color: '#d28e79',
});

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginTop: '2px',
  color: '#855D41',
});

const Detail = () => {
  const [open, setOpen] = useState(false);
  const [accountNumber] = useState('12345678901234567890');
  const [copyMessage, setCopyMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopyMessage('Número de cuenta copiado al portapapeles');
    setTimeout(() => setCopyMessage(''), 3000); // El mensaje desaparece después de 3 segundos
  };

  return (
    <>
      <CardComponent>
        <TitleText>Detalle</TitleText>
        <CardIcon>
          <GiftIcon />
        </CardIcon>
        <ThankYouText>
         
        </ThankYouText>
        <DetailButton onClick={handleOpen}>
          Más información
        </DetailButton>
      </CardComponent>
      <br/>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <CardIcon>
            <GiftIcon></GiftIcon>
          </CardIcon>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#855D41', marginBottom: '20px' }}>
            Nuestro mayor regalo es vuestra presencia
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', color: '#855D41' }}>
            Y ,si en el caso, quieres tener un detalle con nostros, puedes aportar aquí:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <TextField
              fullWidth
              variant="outlined"
              value={accountNumber}
              InputProps={{ readOnly: true }}
            />
            <IconButton onClick={handleCopyAccountNumber}>
              <FileCopyIcon />
            </IconButton>
          </Box>
          {copyMessage && 
            <>
              <CopyMessage>{copyMessage}</CopyMessage>
            </>
            }
         
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Detail;
