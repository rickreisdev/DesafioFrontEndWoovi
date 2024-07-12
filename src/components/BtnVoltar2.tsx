import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BtnVoltar2 = () => {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick7 = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button
                onClick={handleButtonClick7}
                variant="contained"
                color="warning"
                sx={{
                    background: "#03D69D",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mb: "35px",
                }}
            >
                Voltar
            </Button>

            <Modal
                open={openModal}
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
                        Tem certeza que deseja voltar para a página anterior?
                    </Typography>

                    <Box
                        mt="15px"
                        display="flex"
                        alignItems="center"
                        justifyItems="center"
                        gap="10px"
                    >
                        <Button
                            onClick={() => navigate(-1)}
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
        </div>
    );
};

export default BtnVoltar2;
