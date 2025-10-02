import rickreislogo from "../assets/img/logo-rickreis.png";
import Box from "@mui/material/Box";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <Box
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingBottom={2}
            >
                <span>{year} | Desenvolvido por </span>
                <a href="http://rickreis.com.br/dev" target="_blank" rel="noopener noreferrer">
                    <img
                        src={rickreislogo}
                        alt="Rick Reis Logo"
                        width={125}
                        style={{ marginLeft: "8px" }}
                    />
                </a>
            </Box>
        </footer>
    );
}
