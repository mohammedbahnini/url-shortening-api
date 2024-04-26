import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShortenUrlProvider } from 'react-shorten-url'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShortenUrlProvider config={{ accessToken: "a9a346c5307a8eca5296f64768e56d01f1aa0b57" }}>
      <App />
    </ShortenUrlProvider>
  </React.StrictMode>,
)
