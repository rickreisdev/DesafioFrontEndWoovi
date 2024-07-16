import { Box, Typography } from "@mui/material";
import { useValorContext } from "../contexts/valorContext";

const InfoTotalParc = () => {
    const { valorEntrada } = useValorContext();

    let valorTotal = ''

    switch (valorEntrada) {
        case '15.300,00':
            valorTotal = '30.600,00';
            break;
        case '15.310,00':
            valorTotal = '30.620,01';
            break;
        case '15.450,00':
            valorTotal = '30.900,00';
            break;
        case '15.750,00':
            valorTotal = '31.500,00';
            break;
        case '15.849,99':
            valorTotal = '31.699,98';
            break;
        case '15.900,01':
            valorTotal = '31.800,02';
            break;
        default:
            valorTotal = '30.600,00';
    }


    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="10px"
            width="100%"
            sx={{
                borderTop: "2px solid #E5E5E5",
                borderBottom: "2px solid #E5E5E5",
                py: "20px",
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="90%"
            >
                <Typography
                    sx={{
                        color: "#4D4D4D",
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        fontWeight: "600",
                        textTransform: "none",
                    }}
                >
                    CET: 0,5%
                </Typography>

                <Typography
                    sx={{
                        color: "#4D4D4D",
                        fontSize: "18px",
                        lineHeight: "24.55px",
                        fontWeight: "600",
                        textTransform: "none",
                    }}
                >
                    Total: R$ {valorTotal}
                </Typography>
            </Box>
        </Box>
    );
};

const InfoTotal = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="10px"
            width="100%"
            sx={{
                borderTop: "2px solid #E5E5E5",
                borderBottom: "2px solid #E5E5E5",
                py: "20px",
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="90%"
            >
                <Typography
                    sx={{
                        color: "#4D4D4D",
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        fontWeight: "600",
                        textTransform: "none",
                    }}
                >
                    CET: 0,5%
                </Typography>

                <Typography
                    sx={{
                        color: "#4D4D4D",
                        fontSize: "18px",
                        lineHeight: "24.55px",
                        fontWeight: "600",
                        textTransform: "none",
                    }}
                >
                    Total: R$ 30.500,00
                </Typography>
            </Box>
        </Box>
    );
};

export {
    InfoTotalParc,
    InfoTotal
};
