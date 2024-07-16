import { Button } from "@mui/material";

const BtnPagar = () => {
    return (
        <>
            <Button
                type="submit"
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
                    transition: '.2s ease',

                    '&:hover':{
                        background: "#03D69D",
                    }
                }}
            >
                Pagar
            </Button>
        </>
    );
};

export default BtnPagar;
