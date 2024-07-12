import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const FormComponent = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "424px",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
            />
            <TextField fullWidth required id="outlined-required" label="CPF" />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "424px",
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                />
                <TextField id="outlined-number" label="CVV" type="text" />
            </Box>

            <TextField
                id="outlined-select-parcelas"
                select
                label="Parcelas"
                defaultValue="1x"
                fullWidth
            >
                <MenuItem value="1x">1x de R$ 15.300,00</MenuItem>
            </TextField>

            <Button
                variant="contained"
                sx={{
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "100%",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "35px",
                }}
            >
                Pagar
            </Button>
        </Box>
    );
};

const FormComponent2 = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "424px",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
            />
            <TextField fullWidth required id="outlined-required" label="CPF" />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "424px",
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                />
                <TextField id="outlined-number" label="CVV" type="text" />
            </Box>

            <TextField
                id="outlined-select-parcelas"
                select
                label="Parcelas"
                defaultValue="1x"
                fullWidth
            >
                <MenuItem value="1x">2x de R$ 7.655,00</MenuItem>
            </TextField>

            <Button
                variant="contained"
                sx={{
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "100%",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "35px",
                }}
            >
                Pagar
            </Button>
        </Box>
    );
};

const FormComponent3 = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "424px",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
            />
            <TextField fullWidth required id="outlined-required" label="CPF" />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "424px",
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                />
                <TextField id="outlined-number" label="CVV" type="text" />
            </Box>

            <TextField
                id="outlined-select-parcelas"
                select
                label="Parcelas"
                defaultValue="1x"
                fullWidth
            >
                <MenuItem value="1x">3x de R$ 5.150,00</MenuItem>
            </TextField>

            <Button
                variant="contained"
                sx={{
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "100%",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "35px",
                }}
            >
                Pagar
            </Button>
        </Box>
    );
};

const FormComponent4 = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "424px",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
            />
            <TextField fullWidth required id="outlined-required" label="CPF" />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "424px",
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                />
                <TextField id="outlined-number" label="CVV" type="text" />
            </Box>

            <TextField
                id="outlined-select-parcelas"
                select
                label="Parcelas"
                defaultValue="1x"
                fullWidth
            >
                <MenuItem value="1x">4x de R$ 3.937,50</MenuItem>
            </TextField>

            <Button
                variant="contained"
                sx={{
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "100%",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "35px",
                }}
            >
                Pagar
            </Button>
        </Box>
    );
};

const FormComponent5 = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "424px",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
            />
            <TextField fullWidth required id="outlined-required" label="CPF" />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "424px",
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                />
                <TextField id="outlined-number" label="CVV" type="text" />
            </Box>

            <TextField
                id="outlined-select-parcelas"
                select
                label="Parcelas"
                defaultValue="1x"
                fullWidth
            >
                <MenuItem value="1x">5x de R$ 3.169,99</MenuItem>
            </TextField>

            <Button
                variant="contained"
                sx={{
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "100%",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "35px",
                }}
            >
                Pagar
            </Button>
        </Box>
    );
};

const FormComponent6 = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "424px",
                "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
            />
            <TextField fullWidth required id="outlined-required" label="CPF" />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "424px",
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                />
                <TextField id="outlined-number" label="CVV" type="text" />
            </Box>

            <TextField
                id="outlined-select-parcelas"
                select
                label="Parcelas"
                defaultValue="1x"
                fullWidth
            >
                <MenuItem value="1x">6x de R$ 2.650,00</MenuItem>
            </TextField>

            <Button
                variant="contained"
                sx={{
                    background: "#133A6F",
                    fontSize: "18px",
                    lineHeight: "24.55px",
                    textTransform: "none",
                    width: "100%",
                    height: "39px",
                    borderRadius: "8px",
                    mt: "20px",
                    mb: "35px",
                }}
            >
                Pagar
            </Button>
        </Box>
    );
};

export {
    FormComponent,
    FormComponent2,
    FormComponent3,
    FormComponent4,
    FormComponent5,
    FormComponent6,
};
