import { useState } from 'react'
import '../css/appHeader.css'
import logo from '../assets/logo.jpg'

const AppHeader = () => {

  const [open, setOpen] = useState(false)

  return(
    <>
      <header id="container-header">
        <div className="logo-marca">
          <img src={logo} alt="logo" />
          <h2>Rede de Apoio do Cidadão</h2>
        </div>

        {/* Botão menu hamburguer */}
        <div 
          className="hamburger" 
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "line active" : "line"}></span>
          <span className={open ? "line active" : "line"}></span>
        </div>

        <nav className={open ? "nav-bar open" : "nav-bar"}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Artigos</a></li>
            <li><a href="#">Galeria</a></li>
            <li><a href="#">Faça parte</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default AppHeader
