import { Box, Grid, Typography } from "@mui/material";
import Logo from "../components/Logo";
import BtnMetodoPix from "../components/BtnsMetPix";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import logo from "../assets/img/LogoEnd.svg";

const PaymentMethod = () => {
    const nome = "João";

    return (
        <Grid
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh", width: "100%" }}
        >
            <div className="header">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb="40px"
                >
                    <Logo />

                    <Typography
                        mt={4}
                        variant="h3"
                        fontWeight="800"
                        fontSize="24px"
                        lineHeight="32.74px"
                        color="#4D4D4D"
                    >
                        {nome}, como você quer pagar?
                    </Typography>
                </Box>
            </div>

            <div className="pix">
                <Box
                    mt={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="35px"
                >
                    <BtnMetodoPix />

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="3px"
                        mt="5px"
                        mb="33px"
                        color="#B2B2B2"
                        data-testid="seguro-box"
                    >
                        <Box display="flex">
                            <GppGoodOutlinedIcon fontSize="medium" />
                        </Box>

                        <Box display="flex">
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                }}
                            >
                                Pagamento 100% seguro via:
                            </Typography>
                        </Box>

                        <Box display="flex">
                            <img src={logo} alt="logo da woovi" />
                        </Box>
                    </Box>
                </Box>
            </div>
        </Grid>
    );
};

export default PaymentMethod;
