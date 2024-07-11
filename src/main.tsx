import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import PaymentMethod from './routes/paymentMethod.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PaymentMethod />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)