import {Button } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function BtnCopiarPix() {
    return (
        <div>
            <Button
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
        </div>
    )
}