import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// PÁGINAS DO PROJETO
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Galeria from "./pages/galeria/Galeria"
import Artigos from "./pages/artigos/Artigos"
import FacaParte from "./pages/facaParte/FacaParte"
import Footer from "./components/RodaPe"

// COMPONENTES DO CHAT
import Chat from "./components/Chat/Chat"
import Join from "./components/Join/Join"

// Impo
import './css/appMain.css'

function App() {

  const [socket, setSocket] = useState(null)
  const [chatVisibility, setChatVisibility] = useState(false)
  const [minimized, setMinimized] = useState(true)

  return (
    <BrowserRouter>

      {/* ROTAS DO SITE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/facaParte" element={<FacaParte />} />
      </Routes>

      {/* CHAT GLOBAL FIXO */}
      <section className={`chat-wrapper ${minimized ? "minimized" : ""}`}>

        <div className="chat-header">
          <span>💬 Bate-papo</span>
          <button onClick={() => setMinimized(!minimized)}>
            {minimized ? "⬆️" : "⬇️"}
          </button>
        </div>

        <div className={`chat-content ${minimized ? "hide" : ""}`}>
          {chatVisibility ? (
            <Chat socket={socket} />
          ) : (
            <Join 
              setSocket={setSocket} 
              setChatVisibilit={setChatVisibility} 
            />
          )}
        </div>

      </section>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
