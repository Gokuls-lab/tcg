import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import './nav.css'
import App from './App.jsx'
import Service  from './Service.jsx'
import DrawerAppBar from './DrawerAppBar.tsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <DrawerAppBar />
      </StrictMode>
)
