import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AccordionFuncionamento() {
    return (
        <div>
            <Accordion
                sx={{
                    pb: '10px'
                }}
            >
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                >
                    <Typography
                        fontSize="16px"
                        lineHeight="21.82px"
                    >
                        <span>Como funciona?</span>
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                    >
                        O Woovi Parcelado é um método de pagamento inovador que permite a
                        seus clientes pagar 50% de entrada pelo Pix e dividir o restante
                        da compra em até 4x no cartão. O processo é totalmente online, rápido
                        e fácil, com um sistema antifraude nativo para segurança total.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}