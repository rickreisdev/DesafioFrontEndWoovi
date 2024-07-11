import { Box, Button, Typography } from "@mui/material";
import '../assets/styles/global.css'

export default function BtnMetodoPix() {
    return (
        <Button
            sx={{
                position: 'relative',
                width: '429px',
                height: '137px',
                border: '2px solid #E5E5E5',
                borderRadius: '10px'
            }}

        >
            <Box
                sx={{
                    position: 'relative',
                    background: '#FFFFFF'
                }}
            >
                <Box
                    position="absolute"
                    display='flex'
                    alignItems="center"
                    justifyContent="center"
                    top="-83px"
                    left="-194px"
                    width="67px"
                    height="28px"
                    sx={{
                        background: '#E5E5E5',
                        borderRadius: '100px',
                        color: '#4D4D4D',
                        fontWeight: '800',
                        textTransform: 'capitalize',
                        fontSize: '18px',
                        lineHeight: '24px'
                    }}
                >
                    Pix
                </Box>

                <Box
                    position="absolute"
                    top="-45px"
                    left="160px"
                    width="26px"
                    height="26px"
                    sx={{
                        border: '2px solid #E5E5E5',
                        borderRadius: '100px'
                    }}
                >
                </Box>

                <Typography
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        top: '-45px',
                        left: '-195px',
                        color: '#4D4D4D',
                        fontSize: '24px',
                        lineHeight: '28px',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        whiteSpace: 'nowrap'
                    }}
                >
                    <span>1x</span> R$ 30.500,00
                </Typography>

                <Typography
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        top: '-15px',
                        left: '-195px',
                        color: '#03D69D',
                        fontSize: '16px',
                        lineHeight: '20px',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Ganhe <span>3%</span> de Cashback
                </Typography>

                <Box
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    justifyContent="start"
                    paddingLeft="10px"
                    top="14px"
                    left="-195px"
                    width="387px"
                    height="33px"
                    sx={{
                        background: '#133A6F',
                        fontSize: '16px',
                        lineHeight: '20px',
                        textTransform: 'capitalize',
                        color: 'white',
                        borderRadius: '5px',
                        "::after": {
                            position: 'absolute',
                            top: '-9px',
                            left: '377.5px',
                            content: '""',
                            width: '0',
                            height: '0',
                            borderTop: '25px solid transparent',
                            borderBottom: '25px solid transparent',
                            borderRight: '25px solid white'

                        }
                    }}
                >
                    <span>🤑R$ 300,00</span>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            lineHeight: '20px',
                            textTransform: 'lowercase',
                            color: 'white'
                        }}
                    >
                        de volta no seu <span className="pix">Pix</span> na hora
                    </Typography>
                </Box>

            </Box>
        </Button >
    );
}