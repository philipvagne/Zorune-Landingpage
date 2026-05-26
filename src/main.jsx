import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import renderApp, { setupApp } from './App.jsx'
import './App.css'
import './index.css'

// Render the app content
const rootElement = document.getElementById('root')
rootElement.innerHTML = renderApp()
setupApp()

// Add Analytics component to track page views
createRoot(document.createElement('div')).render(
  <StrictMode>
    <Analytics />
  </StrictMode>
)
