import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const BtnsMetPix = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isActive1, setIsActive1] = useState<boolean>(false);
    const [isActive2, setIsActive2] = useState<boolean>(false);
    const [isActive3, setIsActive3] = useState<boolean>(false);
    const [isActive4, setIsActive4] = useState<boolean>(false);
    const [isActive5, setIsActive5] = useState<boolean>(false);
    const [isActive6, setIsActive6] = useState<boolean>(false);

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState<number | null>(null);

    const handleModalClose = () => {
        setOpenModal(null);
        setIsActive(false);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(false);
    };

    const handleButtonClick1 = (modalNumber: number) => {
        setIsActive1((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive ||
                    isActive2 ||
                    isActive3 ||
                    isActive4 ||
                    isActive5 ||
                    isActive6)
            ) {
                setIsActive(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    const handleButtonClick = (modalNumber: number) => {
        setIsActive((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive1 ||
                    isActive2 ||
                    isActive3 ||
                    isActive4 ||
                    isActive5 ||
                    isActive6)
            ) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    const handleButtonClick2 = (modalNumber: number) => {
        setIsActive2((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive ||
                    isActive1 ||
                    isActive3 ||
                    isActive4 ||
                    isActive5 ||
                    isActive6)
            ) {
                setIsActive(false);
                setIsActive1(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    const handleButtonClick3 = (modalNumber: number) => {
        setIsActive3((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive1 ||
                    isActive2 ||
                    isActive ||
                    isActive4 ||
                    isActive5 ||
                    isActive6)
            ) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    const handleButtonClick4 = (modalNumber: number) => {
        setIsActive4((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive1 ||
                    isActive2 ||
                    isActive3 ||
                    isActive ||
                    isActive5 ||
                    isActive6)
            ) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    const handleButtonClick5 = (modalNumber: number) => {
        setIsActive5((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive1 ||
                    isActive2 ||
                    isActive3 ||
                    isActive4 ||
                    isActive ||
                    isActive6)
            ) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive(false);
                setIsActive6(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    const handleButtonClick6 = (modalNumber: number) => {
        setIsActive6((prevState) => {
            const nextState = !prevState;

            if (
                nextState &&
                (isActive1 ||
                    isActive2 ||
                    isActive3 ||
                    isActive4 ||
                    isActive5 ||
                    isActive)
            ) {
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive(false);
            }
            return nextState;
        });
        setOpenModal(modalNumber);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                }}
            >
                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "137px",
                        border: isActive1
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive1 ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "10px",
                        mb: "35px",
                    }}
                    onClick={() => handleButtonClick1(1)}
                >
                    <Box
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        top="-15px"
                        left="12px"
                        width="67px"
                        height="28px"
                        ml="5px"
                        sx={{
                            background: "#E5E5E5",
                            borderRadius: "100px",
                            color: "#4D4D4D",
                            fontWeight: "800",
                            textTransform: "capitalize",
                            fontSize: "18px",
                            lineHeight: "24px",
                        }}
                    >
                        Pix
                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <span>1x</span> R$ 30.500,00
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#03D69D",
                                        fontSize: "16px",
                                        lineHeight: "20px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Ganhe <span>3%</span> de Cashback
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive1
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* faixa azul começa */}
                        <Box position="relative" width="100%">
                            <Box
                                display="flex"
                                alignItems="center"
                                gap="5px"
                                paddingLeft="10px"
                                marginTop="10px"
                                width="95%"
                                height="33px"
                                sx={{
                                    background: "#133A6F",
                                    fontSize: "16px",
                                    lineHeight: "20px",
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderRadius: "5px",
                                    position: "relative",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "15.5px",
                                        lineHeight: "15px",
                                        textTransform: "none",
                                        color: "white",
                                        width: "97%",
                                    }}
                                >
                                    <span>🤑R$ 915,00 </span>
                                    de volta no seu{" "}
                                    <span className="pix">Pix</span> na hora
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    content: '""',
                                    position: "absolute",
                                    top: "2%",
                                    right: "0",
                                    left: "94.5%",
                                    width: "0",
                                    height: "0",
                                    borderTop: "17px solid transparent",
                                    borderBottom: "17px solid transparent",
                                    borderRight: "17px solid white",
                                }}
                            ></Box>
                        </Box>
                    </Box>
                </Button>

                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "105px",
                        border: isActive
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "10px 10px 0 0",
                    }}
                    onClick={() => handleButtonClick(0)}
                >
                    <Box
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        top="-15px"
                        left="12px"
                        width="157px"
                        height="28px"
                        ml="5px"
                        sx={{
                            background: "#E5E5E5",
                            borderRadius: "100px",
                            color: "#4D4D4D",
                            fontWeight: "800",
                            textTransform: "capitalize",
                            fontSize: "18px",
                            lineHeight: "24px",
                        }}
                    >
                        Pix + Cartão
                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    R$ 15.300,00 + <span>1x</span> R$ 15.300,00
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AFAFAF",
                                        fontSize: "16px",
                                        lineHeight: "21.82px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Total: R$ 30.600,00
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Button>

                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "100px",
                        border: isActive2
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive2 ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "0",
                    }}
                    onClick={() => handleButtonClick2(2)}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    R$ 15.310,00 + <span>2x</span> R$ 10.206,67
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AFAFAF",
                                        fontSize: "16px",
                                        lineHeight: "21.82px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Total: R$ 30.620,01
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive2
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Button>

                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "137px",
                        border: isActive3
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive3 ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "0",
                    }}
                    onClick={() => handleButtonClick3(3)}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    R$ 15.450,00 + <span>3x</span> R$ 7.725,00
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AFAFAF",
                                        fontSize: "16px",
                                        lineHeight: "21.82px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Total: R$ 30.900,00
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive3
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* faixa azul começa */}
                        <Box position="relative" width="100%">
                            <Box
                                display="flex"
                                alignItems="center"
                                paddingLeft="10px"
                                marginTop="10px"
                                width="97%"
                                height="33px"
                                sx={{
                                    background: "#133A6F",
                                    fontSize: "15px",
                                    lineHeight: "15px",
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderRadius: "5px",
                                    position: "relative",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "15.5px",
                                        lineHeight: "15px",
                                        textTransform: "none",
                                        color: "white",
                                        width: "97%",
                                    }}
                                >
                                    <span> -3% de juros: </span>
                                    Melhor opção de parcelamento
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    content: '""',
                                    position: "absolute",
                                    top: "1%",
                                    right: "0",
                                    left: "96.6%",
                                    width: "0",
                                    height: "0",
                                    borderTop: "17px solid transparent",
                                    borderBottom: "17px solid transparent",
                                    borderRight: "17px solid white",
                                }}
                            ></Box>
                        </Box>
                    </Box>
                </Button>

                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "100px",
                        border: isActive4
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive4 ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "0",
                    }}
                    onClick={() => handleButtonClick4(4)}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    R$ 15.750,00 + <span>4x</span> R$ 6.300,00
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AFAFAF",
                                        fontSize: "16px",
                                        lineHeight: "21.82px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Total: R$ 31.500,00
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive4
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Button>

                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "100px",
                        border: isActive5
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive5 ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "0",
                    }}
                    onClick={() => handleButtonClick5(5)}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    R$ 15.849,99 + <span>5x</span> R$ 5.283,33
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AFAFAF",
                                        fontSize: "16px",
                                        lineHeight: "21.82px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Total: R$ 31.699,98
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive5
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Button>

                <Button
                    sx={{
                        position: "relative",
                        width: "97%",
                        height: "100px",
                        border: isActive6
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                        background: isActive6 ? "#F4FBF9" : "#FFFFFF",
                        borderRadius: "0",
                    }}
                    onClick={() => handleButtonClick6(6)}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                                ml="5px"
                            >
                                <Typography
                                    sx={{
                                        color: "#4D4D4D",
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    R$ 15.900,01 + <span>6x</span> R$ 4.542,86
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#AFAFAF",
                                        fontSize: "16px",
                                        lineHeight: "21.82px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Total: R$ 31.800.02
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                width="10%"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    top="-45px"
                                    left="160px"
                                    width="26px"
                                    height="26px"
                                    sx={{
                                        border: "2px solid #E5E5E5",
                                        borderRadius: "100px",
                                        background: isActive6
                                            ? "#03D69D"
                                            : "transparent",
                                        transition: ".2s ease",
                                    }}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Button>
            </Box>

            <Modal
                className="0"
                open={openModal === 0}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja parcelar a compra em 2 (duas)
                        vezes?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                className="1"
                open={openModal === 1}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja pagar a compra por Pix a vista?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code1")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                className="2"
                open={openModal === 2}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja parcelar a compra em 3 (três)
                        vezes?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code2")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                className="3"
                open={openModal === 3}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja parcelar a compra em 4 (quatro)
                        vezes?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code3")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                className="4"
                open={openModal === 4}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja parcelar a compra em 5 (cinco)
                        vezes?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code4")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                className="5"
                open={openModal === 5}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja parcelar a compra em 6 (seis)
                        vezes?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code5")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                className="6"
                open={openModal === 6}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyItems="center"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 350,
                        bgcolor: "#F4FBF9",
                        border: "2px solid #03D69D",
                        borderRadius: "10px",
                        boxShadow: 5,
                        p: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Tem certeza que deseja parcelar a compra em 7 (sete)
                        vezes?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate("qr-code6")}
                            color="success"
                            variant="contained"
                        >
                            Sim
                        </Button>

                        <Button
                            onClick={handleModalClose}
                            color="error"
                            variant="contained"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default BtnsMetPix;
