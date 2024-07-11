import { Box, Grid, Typography } from "@mui/material"
import Logo from "../components/Logo"

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QRCodeImg from "../components/qrCodeComponent";
import BtnCopiarPix from "../components/BtnCopiar";
import ProgressoPix from "../components/ProgressoPix";

const QrCodePage = () => {
  const nome = 'João';

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={
        { height: '100vh', width: '100vw' }
      }
    >
      <div className="header">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Logo />

          <Typography
            mt={4}
            variant='h3'
            fontWeight="800"
            fontSize="24px"
            lineHeight="32.74px"
            color="#4D4D4D"
            textAlign="center"
            width="60%"
          >
            {nome}, pague a entrada de R$ 15.300,00 pelo Pix
          </Typography>
        </Box>
      </div>

      <div className="body">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >

          <QRCodeImg />

          <BtnCopiarPix/>

          <Typography
            sx={{
              color: '#B2B2B2',
              fontSize: '16px',
              lineHeight: '21.82px',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            Prazo de pagamento:
          </Typography>

          <Typography
            sx={{
              color: '#4D4D4D',
              fontSize: '16px',
              lineHeight: '21.82px',
              fontWeight: '600',
              textTransform: 'none',
            }}
          >
            <span>15/12/2021 - 08:17</span>
          </Typography>

          <ProgressoPix/>
        </Box>
      </div>
    </Grid>
  )
}

export default QrCodePage
