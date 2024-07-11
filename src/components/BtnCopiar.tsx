import { Button, Snackbar, IconButton, Alert } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BtnCopiarPix() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate('/cartao');
        }, 2000);
    };

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="info" size="small" onClick={handleClose}>
                Voltar
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Button
                onClick={handleClick}
                variant="contained"
                endIcon={<FileCopyIcon />}
                sx={{
                    background: '#133A6F',
                    fontSize: '18px',
                    lineHeight: '24.55px',
                    textTransform: 'none',
                    width: '310px',
                    height: '39px',
                    borderRadius: '8px',
                    mt: '20px',
                    mb: '35px'
                }}
            >
                Clique para copiar o QR CODE
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success" variant="filled" sx={{ width: '100%' }}>
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    )
}