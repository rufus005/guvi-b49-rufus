import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <Home name="home"/>
  <Home name="home2"/>
  <Home name="home 3"/>
  </React.StrictMode>,
)