import { Box } from "@mui/material";
import qrCode from "../assets/img/qrCode.png";

export default function QRCodeImg() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="350px"
                border="2px solid #03D69D"
                borderRadius="10px"
            >
                <img src={qrCode} alt="Qr Code" />
            </Box>
        </Box>
    );
}
