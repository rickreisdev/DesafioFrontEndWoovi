import { Box, Typography } from "@mui/material";

export default function InfoTotal() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="10px"
            sx={{
                borderTop: '2px solid #E5E5E5',
                borderBottom: '2px solid #E5E5E5',
                py: '20px'
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="200px"
            >
                <Typography
                    sx={{
                        color: '#4D4D4D',
                        fontSize: '14px',
                        lineHeight: '19.1px',
                        fontWeight: '600',
                        textTransform: 'none',
                    }}
                >
                    CET: 0,5%
                </Typography>

                <Typography
                    sx={{
                        color: '#4D4D4D',
                        fontSize: '18px',
                        lineHeight: '24.55px',
                        fontWeight: '600',
                        textTransform: 'none',
                    }}
                >
                    Total: R$ 30.600,00
                </Typography>
            </Box>
        </Box>
    )
}