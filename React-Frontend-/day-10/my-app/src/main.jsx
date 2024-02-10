import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Store from './Store.jsx'
import Context from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Store> */}
    <Context>

    <App />

    </Context>

    {/* </Store> */}
  </React.StrictMode>,
)
