import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Flyer from './Flyer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flyer />
  </StrictMode>,
)