import { Box, styled } from "@mui/material";

export function CardIcon ({children}) {

    const IconContainer = styled(Box)({
        position: 'absolute',
        top: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
      });
    return  (
        <IconContainer>
            {children}
        </IconContainer>
    );
}