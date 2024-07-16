import { Box, Typography } from "@mui/material";

const ProgressoPix = () => {
    
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
                                zIndex: "1000",
                                border: "2px solid #03D69D",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                                "::after": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: "27px",
                                    left: "-2.8px",
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
                            }}
                        >
                            Entrada no Pix
                        </Typography>
                    </Box>

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
                                border: "2px solid #E5E5E5",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
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
                        <span>Restante do Valor</span>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};


export {
    ProgressoPix
};
