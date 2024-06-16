import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import DirectionsIcon from '@mui/icons-material/Directions';
import TitleSection from './TitleSection';

const CeremonyContainer = styled(Box)({
  width: '100%',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  margin: '20px 0',
  textAlign: 'center',
});

const TitleContainer = styled(Box)({
  marginTop: '25%',
  textAlign: 'center',
  marginBottom: '20px',
});

const TitleText = styled(Typography)({
  backgroundColor: '#855D41', // Color marrón cálido
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  display: 'inline-block',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid #855D41',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderLeft: '10px solid #855D41',
    borderRight: '10px solid transparent',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
  },
});

const Section = styled(Box)({
  marginBottom: '20px',
});

const Ceremony = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: 'Boda Fran y Laura - El Invernadero Eventos, Benicassim',
      start: '2024-05-15T17:00:00',
      end: '2024-05-15T23:00:00',
      location: 'El Invernadero - Arrecife, Av. Gimeno Tomas, 36, 12560 Benicàssim, Castellón',
    };

    const calendarUrl = new URL('https://www.google.com/calendar/render');
    calendarUrl.searchParams.append('action', 'TEMPLATE');
    calendarUrl.searchParams.append('text', event.title);
    calendarUrl.searchParams.append('dates', `${event.start.replace(/-|:|\.\d\d\d/g, '')}/${event.end.replace(/-|:|\.\d\d\d/g, '')}`);
    calendarUrl.searchParams.append('location', event.location);

    window.open(calendarUrl.toString(), '_blank');
  };

  return (
    <>
      <TitleSection title="Ceremonia" />
      <CeremonyContainer>
        <Section>
        <CalendarTodayIcon sx={{ color: '#d28e79', fontSize: '2rem', marginBottom: '10px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#855D41' }}>DÍA</Typography>
          <Typography variant="body1">Viernes 27 de Septiembre - 19.30h</Typography>
          <Button
            variant="contained"
            sx={{ marginTop: '10px', backgroundColor: '#d28e79', color: '#fff', width: '80%' }}
            onClick={handleAddToCalendar}
            startIcon={<AddAlarmIcon />}
          >
            Agendar
          </Button>
        </Section>
        <Section marginTop={5}>
        <LocationOnIcon sx={{ color: '#d28e79', fontSize: '2rem', marginBottom: '10px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#855D41' }}>LUGAR</Typography>
          <Typography variant="body1">El Invernadero - Arrecife</Typography>
          <Button
            variant="contained"
            sx={{ marginTop: '10px', backgroundColor: '#d28e79', color: '#fff', width: '80%' }}
            href="https://www.google.com/maps/place/El+Invernadero+-+Arrecife/@40.0462533,0.0507617,17z/data=!3m1!4b1!4m6!3m5!1s0x12a00148bd6b6d67:0x424c4ff8aff7195a!8m2!3d40.0462533!4d0.0507617!16s%2Fg%2F11rfr957rw?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DirectionsIcon />}
          >
            Cómo llegar
          </Button>
        </Section>
      </CeremonyContainer>
    </>
  );
};

export default Ceremony;
