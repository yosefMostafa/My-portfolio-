import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setTheme, getSavedTheme } from './styles/themes.ts';

const saved = getSavedTheme();
setTheme(saved || 'dark'); // Default to 'light' if nothing is stored

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
