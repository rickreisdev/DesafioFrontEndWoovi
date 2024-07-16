import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useValorContext } from "../contexts/valorContext";

const ProgressoCartaoParc = () => {
    const { valorEntrada } = useValorContext();

    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="20px"
                mb="25px"
                gap="15px"
                width="100vw"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#03D69D",
                                "::after": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: "32px",
                                    left: "1px",
                                    width: "21.1px",
                                    height: "2px",
                                    transform: "rotate(90deg)",
                                    background: "#E5E5E5",
                                },
                            }}
                        >
                            <CheckCircleIcon />
                        </Box>

                        <Typography
                            sx={{
                                display: "flex",
                                color: "#4D4D4D",
                                fontSize: "18px",
                                lineHeight: "24.55px",
                                fontWeight: "600",
                                textTransform: "none",
                            }}
                        >
                            Entrada no Pix
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: "#4D4D4D",
                            fontSize: "18px",
                            lineHeight: "24.55px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        <span>R$ {valorEntrada}</span>
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                >
                    <Box
                        display="flex"
                        position="relative"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box
                            sx={{
                                display: "flex",
                                position: "absolute",
                                left: "2px",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px solid #03D69D",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                            }}
                        ></Box>

                        <Typography
                            sx={{
                                display: "flex",
                                ml: "30px",
                                color: "#4D4D4D",
                                fontSize: "18px",
                                lineHeight: "24.55px",
                                fontWeight: "600",
                                textTransform: "none",
                            }}
                        >
                            No Cartão
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: "#4D4D4D",
                            fontSize: "18px",
                            lineHeight: "24.55px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        <span>Restante do valor</span>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

const ProgressoCartao = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="15px"
                mb="25px"
                gap="15px"
                width="100vw"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#03D69D",
                                "::after": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: "32px",
                                    left: "1px",
                                    width: "21.1px",
                                    height: "2px",
                                    transform: "rotate(90deg)",
                                    background: "#E5E5E5",
                                },
                            }}
                        >
                            <CheckCircleIcon />
                        </Box>

                        <Typography
                            sx={{
                                display: "flex",
                                color: "#4D4D4D",
                                fontSize: "18px",
                                lineHeight: "24.55px",
                                fontWeight: "600",
                                textTransform: "none",
                            }}
                        >
                            Pagamento no Pix
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: "#4D4D4D",
                            fontSize: "18px",
                            lineHeight: "24.55px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        <span>R$ 30.500,00</span>
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                >
                    <Box
                        display="flex"
                        position="relative"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box
                            sx={{
                                display: "flex",
                                position: "absolute",
                                left: "2px",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px solid #03D69D",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                            }}
                        ></Box>

                        <Typography
                            sx={{
                                display: "flex",
                                ml: "30px",
                                color: "#4D4D4D",
                                fontSize: "18px",
                                lineHeight: "24.55px",
                                fontWeight: "600",
                                textTransform: "none",
                            }}
                        >
                            2ª no Cartão
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: "#4D4D4D",
                            fontSize: "18px",
                            lineHeight: "24.55px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        <span>R$ 7.655,00</span>
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box
                            sx={{
                                position: "relative",
                                border: "2px solid #E5E5E5",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                                ml: "2px",
                                "::before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: "-12.4px",
                                    left: "-2px",
                                    width: "21.1px",
                                    height: "2px",
                                    transform: "rotate(90deg)",
                                    background: "#E5E5E5",
                                },
                            }}
                        ></Box>

                        <Typography
                            sx={{
                                display: "flex",
                                color: "#4D4D4D",
                                fontSize: "18px",
                                lineHeight: "24.55px",
                                fontWeight: "600",
                                textTransform: "none",
                                ml: "5px",
                            }}
                        >
                            3ª no Cartão
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: "#4D4D4D",
                            fontSize: "18px",
                            lineHeight: "24.55px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        <span>R$ 7.655,00</span>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export {
    ProgressoCartaoParc,
    ProgressoCartao
};
