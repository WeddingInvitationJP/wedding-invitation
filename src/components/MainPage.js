import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import Countdown from "./Countdown";
import Ceremony from "./Ceremony";
import Party from "./Party";
import Confirmation from "./Confirmation";
import Detail from "./Detail";
import backgroundImage from "../assets/fran-laura-cl.jpg"; // Asegúrate de que la ruta sea correcta
import quotes from "../assets/quotes.png";
import musicFile from "../assets/music.mp3"; // Asegúrate de que la ruta sea correcta
import "../styles.css"; // Asegúrate de importar el CSS aquí

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  background: "#fff",
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Cinzel', serif",
  color: "#855D41", // Color marrón cálido
  position: "relative",
});

const BackgroundImageContainer = styled(Box)({
  width: "100vw", // Ocupar todo el ancho de la ventana
  height: "40vh", // Ajusta la altura según necesites
  background: `url(${backgroundImage}) no-repeat center center`,
  backgroundSize: "cover",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  position: "relative",
  marginBottom: "-5vh", // Solapar un poco la imagen de los novios
});

const ContentBox = styled(Box)({
  width: "100%",
  padding: "20px",
  marginTop: "20px",
  position: "relative",
});

const AmpersandSymbol = styled(Typography)({
  position: "absolute",
  fontSize: "10rem",
  color: "#855D41",
  opacity: 0.1,
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
});

const DateTypography = styled(Typography)({
  marginTop: "20px",
  padding: "0 10px",
  borderTop: "2px solid #855D41", // Borde superior
  borderBottom: "2px solid #855D41", // Borde inferior
  display: "inline-block", // Para ajustar el ancho del borde a solo el contenido
});

const DateTypographyBottom = styled(Typography)({
  marginTop: "20px",
  padding: "0 10px",
  borderTop: "2px solid #855D41", // Borde superior
  borderBottom: "2px solid #855D41", // Borde inferior
  display: "inline-block", // Para ajustar el ancho del borde a solo el contenido
});

const FloatingButton = styled(IconButton)(({ musicPlaying }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#d28e79",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#b36b53",
  },
  animation: musicPlaying ? "heartbeat 4.5s infinite" : "none",
}));

const MenuButton = styled(IconButton)({
  position: "fixed",
  top: "20px",
  right: "20px",
  backgroundColor: "#d28e79",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#b36b53",
  },
});

const MainPage = () => {
  const [musicPlaying, setMusicPlaying] = React.useState(true);
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const audioRef = React.useRef(new Audio(musicFile));

  React.useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.15;
    if (musicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <MainContainer>
      <BackgroundImageContainer />
      <DateTypography style={{ marginTop: "24%" }} variant="h6">
        27.09.2024
      </DateTypography>
      <ContentBox>
        <AmpersandSymbol>&</AmpersandSymbol>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            position: "relative",
            zIndex: 1,
            marginTop: 2,
          }}
        >
          FRAN
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          LAURA
        </Typography>
      </ContentBox>
      <Box mt={4}>
        <img src={quotes} width={"40px"} />
        <Typography
          variant="subtitle1"
          sx={{ fontStyle: "italic", position: "relative", zIndex: 1 }}
        >
          Todos somos mortales, hasta el primer beso y la segunda copa de vino.
        </Typography>
        <img src={quotes} width={"40px"} style={{ rotate: "180deg" }} />
      </Box>
      <Countdown eventDate="2024-09-27T19:30:00" />
      <Ceremony id="ceremony" />
      <Party id="party" />
      <Confirmation id="confirmation" />
      <Detail id="detail" />
      <DateTypographyBottom
        style={{ marginTop: "5%", opacity: 0.2, fontSize: 20 }}
        variant="h6"
      >
        27.09.2024
      </DateTypographyBottom>
      <div style={{ marginBottom: "20px" }}></div>
      <FloatingButton musicPlaying={musicPlaying} onClick={toggleMusic}>
        {musicPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </FloatingButton>
    </MainContainer>
  );
};

export default MainPage;
