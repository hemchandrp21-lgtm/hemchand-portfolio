import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IceFireProvider } from './context/IceFireContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IceFireProvider>
      <App />
    </IceFireProvider>
  </StrictMode>,
)
