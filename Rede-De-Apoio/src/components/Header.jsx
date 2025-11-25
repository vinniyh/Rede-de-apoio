import { useState } from 'react'
import { Link } from "react-router-dom"
import '../css/appHeader.css'
import logo from '../assets/logo.jpg'

const AppHeader = () => {

  const [open, setOpen] = useState(false)

  return (
    <header id="container-header">
      
      {/* LOGO */}
      <div className="logo-marca">
        <img src={logo} alt="logo" />
        <h2>Rede de Apoio do Cidadão</h2>
      </div>

      {/* BOTÃO HAMBURGUER */}
      <div 
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <nav className={open ? "nav-bar open" : "nav-bar"}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
        <Link to="/artigos" onClick={() => setOpen(false)}>Guia do INSS</Link>
        <Link to="/galeria" onClick={() => setOpen(false)}>Relatos</Link>
        <Link to="/facaparte" onClick={() => setOpen(false)}>Voluntariar</Link>
      </nav>

    </header>
  )
}

export default AppHeader
