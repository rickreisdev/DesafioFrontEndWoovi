import Box from "@mui/material/Box";
import logo from "../assets/img/Logo.svg";

export default function Logo() {
    return (
        <Box mt={4} display="flex" justifyContent="center" alignItems="center">
            <img src={logo} alt="logo da woovi" />
        </Box>
    );
}