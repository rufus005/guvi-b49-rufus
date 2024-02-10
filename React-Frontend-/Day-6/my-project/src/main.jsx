import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from './Post.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Post name="Post 1"/>
    <Post name="Post 2"/>
    <Post name="Post 3"/>
    <Post name="Post 4"/>
  </React.StrictMode>,
)
