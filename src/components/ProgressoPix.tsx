import { Box, Typography } from "@mui/material";

const ProgressoPix = () => {
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
                            zIndex: '1000',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '27px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
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
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Box sx={{
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px'
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
                            2ª no Cartão
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

const ProgressoPix2 = () => {
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
                            zIndex: '1000',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '27px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
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
                                top: '27px',
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
                            2ª no Cartão
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
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px'
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

const ProgressoPix3 = () => {
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
                            zIndex: '1000',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '27px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
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
                        <span>R$ 15.450,00</span>
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
                            2ª no Cartão
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

const ProgressoPix4 = () => {
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
                            zIndex: '1000',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '27px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
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
                                top: '27px',
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
                            2ª no Cartão
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
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px'
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

const ProgressoPix5 = () => {
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
                            zIndex: '1000',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '27px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
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
                                top: '27px',
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
                            2ª no Cartão
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
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px'
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

const ProgressoPix6 = () => {
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
                            zIndex: '1000',
                            border: '2px solid #03D69D',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            '::after': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: '27px',
                                left: '-2.8px',
                                width: '21.1px',
                                height: '2px',
                                transform: 'rotate(90deg)',
                                background: '#E5E5E5'
                            }
                        }}
                        >
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
                                top: '27px',
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
                            2ª no Cartão
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
                            border: '2px solid #E5E5E5',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px'
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
    ProgressoPix, ProgressoPix2, ProgressoPix3,
    ProgressoPix4, ProgressoPix5, ProgressoPix6
};