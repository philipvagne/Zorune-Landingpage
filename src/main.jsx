import renderApp, { setupApp } from './App.jsx'
import './App.css'
import './index.css'
import { inject } from '@vercel/analytics'

document.getElementById('root').innerHTML = renderApp()
setupApp()

// Initialize Vercel Analytics
inject()
