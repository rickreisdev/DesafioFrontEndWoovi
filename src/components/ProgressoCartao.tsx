import { Box, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProgressoCartao = () => {
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

const ProgressoCartao2 = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="15px"
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
                        <span>R$ 15.310,00</span>
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
                        <span>R$ 7.655,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            ml: '2px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.4px',
                                left: '-2px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            3ª no Cartão
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
                        <span>R$ 7.655,00</span>
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}

const ProgressoCartao3 = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="15px"
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
                        <span>R$ 15.450,000</span>
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
                        <span>R$ 5.150,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            3ª no Cartão
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
                        <span>R$ 5.150,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            4ª no Cartão
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
                        <span>R$ 5.150,00</span>
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}

const ProgressoCartao4 = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="15px"
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
                        <span>R$ 15.750,00</span>
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
                        <span>R$ 3.937,50</span>
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
                        position="relative"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-8px',
                                left: '0.5px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            3ª no Cartão
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
                        <span>R$ 3.937,50</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            4ª no Cartão
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
                        <span>R$ 3.937,50</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            5ª no Cartão
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
                        <span>R$ 3.937,50</span>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

const ProgressoCartao5 = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="15px"
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
                        <span>R$ 15.849,99</span>
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
                        <span>R$ 3.169,99</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-1px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            3ª no Cartão
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
                        <span>R$ 3.169,99</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            4ª no Cartão
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
                        <span>R$ 3.169,99</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            5ª no Cartão
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
                        <span>R$ 3.169,99</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            6ª no Cartão
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
                        <span>R$ 3.169,99</span>
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}

const ProgressoCartao6 = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt="15px"
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
                        <span>R$ 15.900,01</span>
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
                        <span>R$ 2.650,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            ml: '1px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12px',
                                left: '-1px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            3ª no Cartão
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
                        <span>R$ 2.650,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            ml: '1px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            4ª no Cartão
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
                        <span>R$ 2.650,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            ml: '1px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            5ª no Cartão
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
                        <span>R$ 2.650,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            ml: '1px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            6ª no Cartão
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
                        <span>R$ 2.650,00</span>
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            position: 'relative',
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            ml: '1px',
                            '::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '-12.5px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}>
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
                            7ª no Cartão
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
                        <span>R$ 2.650,00</span>
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}

export {
    ProgressoCartao, ProgressoCartao2, ProgressoCartao3,
    ProgressoCartao4, ProgressoCartao5, ProgressoCartao6
};