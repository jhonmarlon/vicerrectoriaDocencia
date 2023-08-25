import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import { Header } from './components/common/Header.jsx'
import { Footer } from './components/common/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
      <App />
    <Footer/>
  </React.StrictMode>,
)
