import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  // Correct import
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Use `createRoot` directly here (not `ReactDOM.createRoot`)
const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
