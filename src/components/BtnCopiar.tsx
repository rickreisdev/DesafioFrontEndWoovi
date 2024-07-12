import { Button, Snackbar, IconButton, Alert } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BtnCopiarPix = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate("/cartao");
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

const BtnCopiarPix1 = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate(-1);
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

const BtnCopiarPix2 = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate("/cartao2");
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

const BtnCopiarPix3 = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate("/cartao3");
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

const BtnCopiarPix4 = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate("/cartao4");
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

const BtnCopiarPix5 = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate("/cartao5");
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

const BtnCopiarPix6 = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            navigate("/cartao6");
        }, 2000);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
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
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "310px",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "10px",
                }}
            >
                Clique para copiar o código
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Copiado com sucesso!
                </Alert>
            </Snackbar>
        </div>
    );
};

export {
    BtnCopiarPix,
    BtnCopiarPix1,
    BtnCopiarPix2,
    BtnCopiarPix3,
    BtnCopiarPix4,
    BtnCopiarPix5,
    BtnCopiarPix6,
};
