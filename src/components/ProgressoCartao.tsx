import { Box, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ProgressoPix() {
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
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="160px"
                    width="100%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#03D69D',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '32px',
                                left: '1px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
                            <CheckCircleIcon />
                        </Box>

                        <Typography
                            sx={{
                                display: "flex",
                                color: '#4D4D4D',
                                fontSize: '18px',
                                lineHeight: '24.55px',
                                fontWeight: '600',
                                textTransform: 'none'
                            }}
                        >
                            1ª entrada no Pix
                        </Typography>

                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: '#4D4D4D',
                            fontSize: '18px',
                            lineHeight: '24.55px',
                            fontWeight: '600',
                            textTransform: 'none',
                        }}
                    >
                        <span>R$ 15.300,00</span>
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <Box
                        display="flex"
                        position='relative'
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            display: 'flex',
                            position: 'absolute',
                            left: '2px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px'
                        }}
                        >
                        </Box>

                        <Typography
                            sx={{
                                display: "flex",
                                ml: '30px',
                                color: '#4D4D4D',
                                fontSize: '18px',
                                lineHeight: '24.55px',
                                fontWeight: '600',
                                textTransform: 'none',
                            }}
                        >
                            2º no Cartão
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            display: "flex",
                            color: '#4D4D4D',
                            fontSize: '18px',
                            lineHeight: '24.55px',
                            fontWeight: '600',
                            textTransform: 'none'
                        }}
                    >
                        <span>R$ 15.300,00</span>
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}