import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentMethod from "./routes/paymentMethod.tsx";
import QrCodePage from "./routes/qrCode/qrCode.tsx";
import PaymentCartao from "./routes/paymentCartao/paymentCartao.tsx";
import QrCodePage2 from "./routes/qrCode/qrCode2.tsx";
import QrCodePage3 from "./routes/qrCode/qrCode3.tsx";
import QrCodePage1 from "./routes/qrCode/qrCode1.tsx";
import QrCodePage4 from "./routes/qrCode/qrCode4.tsx";
import QrCodePage5 from "./routes/qrCode/qrCode5.tsx";
import QrCodePage6 from "./routes/qrCode/qrCode6.tsx";
import PaymentCartao2 from "./routes/paymentCartao/paymentCartao2.tsx";
import PaymentCartao3 from "./routes/paymentCartao/paymentCartao3.tsx";
import PaymentCartao4 from "./routes/paymentCartao/paymentCartao4.tsx";
import PaymentCartao5 from "./routes/paymentCartao/paymentCartao5.tsx";
import PaymentCartao6 from "./routes/paymentCartao/paymentCartao6.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<PaymentMethod />} />
                    <Route path="qr-code" element={<QrCodePage />} />
                    <Route path="qr-code1" element={<QrCodePage1 />} />
                    <Route path="qr-code2" element={<QrCodePage2 />} />
                    <Route path="qr-code3" element={<QrCodePage3 />} />
                    <Route path="qr-code4" element={<QrCodePage4 />} />
                    <Route path="qr-code5" element={<QrCodePage5 />} />
                    <Route path="qr-code6" element={<QrCodePage6 />} />
                    <Route path="/cartao" element={<PaymentCartao />} />
                    <Route path="/cartao2" element={<PaymentCartao2 />} />
                    <Route path="/cartao3" element={<PaymentCartao3 />} />
                    <Route path="/cartao4" element={<PaymentCartao4 />} />
                    <Route path="/cartao5" element={<PaymentCartao5 />} />
                    <Route path="/cartao6" element={<PaymentCartao6 />} />
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
