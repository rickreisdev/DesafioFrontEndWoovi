import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaymentMethod from './routes/paymentMethod.tsx'
import QrCodePage from './routes/qrCode.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PaymentMethod />} />
          <Route path='qr-code' element={<QrCodePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)