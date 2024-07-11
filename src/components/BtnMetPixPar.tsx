import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function BtnMetodoPixParc() {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);

    const handleButtonClick = () => {
        setIsActive(prevState => {
            const nextState = !prevState;

            if (nextState && (isActive2 || isActive3 || isActive4 || isActive5 || isActive6)) {
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
    };

    const handleButtonClick2 = () => {
        setIsActive2(prevState => {
            const nextState = !prevState;

            if (nextState && (isActive || isActive3 || isActive4 || isActive5 || isActive6)) {
                setIsActive(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
    };

    const handleButtonClick3 = () => {
        setIsActive3(prevState => {
            const nextState = !prevState;

            if (nextState && (isActive2 || isActive || isActive4 || isActive5 || isActive6)) {
                setIsActive2(false);
                setIsActive(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
    };

    const handleButtonClick4 = () => {
        setIsActive4(prevState => {
            const nextState = !prevState;

            if (nextState && (isActive2 || isActive3 || isActive || isActive5 || isActive6)) {
                setIsActive2(false);
                setIsActive3(false);
                setIsActive(false);
                setIsActive5(false);
                setIsActive6(false);
            }
            return nextState;
        });
    };

    const handleButtonClick5 = () => {
        setIsActive5(prevState => {
            const nextState = !prevState;

            if (nextState && (isActive2 || isActive3 || isActive4 || isActive || isActive6)) {
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive(false);
                setIsActive6(false);
            }
            return nextState;
        });
    };

    const handleButtonClick6 = () => {
        setIsActive6(prevState => {
            const nextState = !prevState;

            if (nextState && (isActive2 || isActive3 || isActive4 || isActive5 || isActive)) {
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
                setIsActive(false);
            }
            return nextState;
        });
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Button
                sx={{
                    position: 'relative',
                    width: '429px',
                    height: '105px',
                    border: isActive ? '2px solid #03D69D' : '2px solid #E5E5E5',
                    borderRadius: '10px 10px 0 0'
                }}
                onClick={handleButtonClick}
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
                        top="-65px"
                        left="-194px"
                        width="157px"
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
                        Pix Parcelado
                    </Box>

                    <Box
                        sx={{
                            position: 'absolute',
                            mt: '25px'
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            position="absolute"
                            top="-45px"
                            left="160px"
                            width="26px"
                            height="26px"
                            sx={{
                                border: '2px solid #E5E5E5',
                                borderRadius: '100px',
                                background: isActive ? '#03D69D' : 'transparent',
                                transition: '.2s ease'
                            }}
                        >
                            <CheckIcon
                                fontSize='small'
                                sx={{
                                    color: 'white'
                                }}
                            />
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
                                color: '#AFAFAF',
                                fontSize: '16px',
                                lineHeight: '21.82px',
                                fontWeight: '600',
                                textTransform: 'capitalize',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Total: R$ 30.600,00
                        </Typography>
                    </Box>

                </Box>
            </Button >

            <Button
                sx={{
                    position: 'relative',
                    width: '429px',
                    height: '100px',
                    border: isActive2 ? '2px solid #03D69D' : '2px solid #E5E5E5',
                    borderRadius: '0'
                }}
                onClick={handleButtonClick2}
            >
                <Box
                    sx={{
                        position: 'relative',
                        background: '#FFFFFF'
                    }}
                >

                    <Box
                        sx={{
                            position: 'absolute',
                            mt: '25px'
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            position="absolute"
                            top="-45px"
                            left="160px"
                            width="26px"
                            height="26px"
                            sx={{
                                border: '2px solid #E5E5E5',
                                borderRadius: '100px',
                                background: isActive2 ? '#03D69D' : 'transparent',
                                transition: '.2s ease'
                            }}
                        >
                            <CheckIcon
                                fontSize='small'
                                sx={{
                                    color: 'white'
                                }}
                            />
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
                                color: '#AFAFAF',
                                fontSize: '16px',
                                lineHeight: '21.82px',
                                fontWeight: '600',
                                textTransform: 'capitalize',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Total: R$ 30.600,00
                        </Typography>
                    </Box>

                </Box>
            </Button >

            <Button
                sx={{
                    position: 'relative',
                    width: '429px',
                    height: '137px',
                    border: isActive3 ? '2px solid #03D69D' : '2px solid #E5E5E5',
                    borderRadius: '0'
                }}
                onClick={handleButtonClick3}
            >
                <Box
                    sx={{
                        position: 'relative',
                        background: '#FFFFFF'
                    }}
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="absolute"
                        top="-45px"
                        left="160px"
                        width="26px"
                        height="26px"
                        sx={{
                            border: '2px solid #E5E5E5',
                            borderRadius: '100px',
                            background: isActive3 ? '#03D69D' : 'transparent',
                            transition: '.2s ease'
                        }}
                    >
                        <CheckIcon
                            fontSize='small'
                            sx={{
                                color: 'white'
                            }}
                        />
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

        </Box>
    );
}