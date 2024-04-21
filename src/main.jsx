import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './App.jsx'
import Header from './Header.jsx'
import Section from './Section.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Section />
    <Footer />

    
  </React.StrictMode>,

)
