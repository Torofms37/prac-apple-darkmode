import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Banner } from './components/Banner.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner/>
    <App />
  </StrictMode>,
)
