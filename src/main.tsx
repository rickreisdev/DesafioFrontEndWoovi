import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaymentMethod from './routes/paymentMethod.tsx'
import QrCodePage from './routes/qrCode.tsx'
import PaymentCartao from './routes/paymentCartao.tsx'
import QrCodePage2 from './routes/qrCode2.tsx'
import QrCodePage3 from './routes/qrCode3.tsx'
import QrCodePage1 from './routes/qrCode1.tsx'
import QrCodePage4 from './routes/qrCode4.tsx'
import QrCodePage5 from './routes/qrCode5.tsx'
import QrCodePage6 from './routes/qrCode6.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PaymentMethod />} />
          <Route path='qr-code' element={<QrCodePage />} />
          <Route path='qr-code1' element={<QrCodePage1 />} />
          <Route path='qr-code2' element={<QrCodePage2 />} />
          <Route path='qr-code3' element={<QrCodePage3 />} />
          <Route path='qr-code4' element={<QrCodePage4 />} />
          <Route path='qr-code5' element={<QrCodePage5 />} />
          <Route path='qr-code6' element={<QrCodePage6 />} />
          <Route path='/cartao' element={<PaymentCartao />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)