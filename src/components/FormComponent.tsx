
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

export default function FormComponent() {

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '424px',
                '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome completo"
                defaultValue="João Linaldo Dias Fraga Santos"
            />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="CPF"
                defaultValue="405.503.503-15"
            />
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Número do cartão"
                defaultValue="405.503.503-15"
            />

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    width: '424px',
                }}
            >
                <TextField
                    id="outlined-password-input"
                    label="Vencimento"
                    type="text"
                    defaultValue="10/11"
                />
                <TextField
                    id="outlined-number"
                    label="CVV"
                    type="text"
                    defaultValue="405"
                />
            </Box>

            <TextField
                id="outlined-select-currency"
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
                    background: '#133A6F',
                    fontSize: '18px',
                    lineHeight: '24.55px',
                    textTransform: 'none',
                    width: '100%',
                    height: '39px',
                    borderRadius: '8px',
                    mt: '20px',
                    mb: '35px'
                }}
            >
                Pagar
            </Button>

        </Box>
    );
}