import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// PÁGINAS REAIS DO SEU PROJETO
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Galeria from "./pages/galeria/Galeria"
import Artigos from "./pages/artigos/Artigos"
import FacaParte from "./pages/facaParte/FacaParte"

// COMPONENTES DO CHAT
import Chat from "./components/Chat/Chat"
import Join from "./components/Join/Join"

function App() {

  const [socket, setSocket] = useState(null)
  const [chatVisibility, setChatVisibility] = useState(false)
  const [minimized, setMinimized] = useState(false)

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

    </BrowserRouter>
  )
}

export default App
