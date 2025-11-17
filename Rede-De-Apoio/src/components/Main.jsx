import '../css/appMain.css'
import Join from './Join/Join'
import Chat from './Chat/Chat'
import { useState } from 'react'

const AppMain = () => {
  const [chatVisibility, setChatVisibilit] = useState(false)
  const [socket, setSocket] = useState(null)
  const [minimized, setMinimized] = useState(false)

  return (
    <>
      <div className='titulo-main'>
        <h1>Bem-vindo(a) ao nosso espaço de apoio e informação</h1>
      </div>
      <main id="container-main">
        <section className="app-section">
          <div className="card"><div className="box"><div className="content">
            <p> Este site nasceu da experiência de pessoas que, assim como você, precisaram enfrentar um momento inesperado da vida: um acidente, um diagnóstico difícil ou uma condição de saúde que exigiu afastamento do trabalho. Sabemos que esse processo pode ser confuso, doloroso e cheio de incertezas. Por isso, criamos este espaço com um propósito simples e ao mesmo tempo essencial: acolher, orientar e caminhar com você.</p>
          </div></div></div>
          <div className='separation'>
          <div className="card"><div className="box"><div className="content">
            <p>Aqui, você encontrará informações claras sobre seus direitos, etapas do processo de benefício, perícia médica, documentos necessários e tudo o que pode facilitar a sua jornada no INSS. Mas também vai encontrar algo que muitas vezes falta nesse momento: empatia, compreensão e palavras que te lembram que você não está sozinho(a).</p>
          </div></div></div>

          <div className="card"><div className="box"><div className="content">
            <p>Nosso conteúdo foi pensado para ser leve, direto e humano — porque entendemos que as dúvidas não são só burocráticas: elas mexem com a vida, com a rotina, com o emocional e com o futuro.</p>
          </div></div></div>
          </div>

        </section>

        {/* CHAT FIXO */}
        <section
          className={`chat-wrapper ${minimized ? "minimized" : ""}`}>
          
          <div className="chat-header">
            <span>💬 Bate-papo</span>
            <button onClick={() => setMinimized(!minimized)}>
              {minimized ? "⬆️" : "⬇️"}
            </button>
          </div>

          {!minimized && (
            chatVisibility
              ? <Chat socket={socket}/>
              : <Join setSocket={setSocket} setChatVisibilit={setChatVisibilit} />
          )}

        </section>
      </main>
    </>
  )
}

export default AppMain
