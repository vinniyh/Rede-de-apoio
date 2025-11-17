import React, { useRef } from "react"
import io from 'socket.io-client'
import '../../css/join.css'

const Join = ({ setChatVisibilit, setSocket }) => {
  
  const usernameRef = useRef()

  const handleSubmit = async () => {
    const username = usernameRef.current.value
    if (!username.trim()) return

    const socket = await io.connect('http://localhost:3001')
    socket.emit('set_username', username)
    setSocket(socket)
    setChatVisibilit(true)
  }

  return (
    <div className="join-container">
      <div className="join-card">
        <h1>Entrar no Chat</h1>

        <input
          type="text"
          ref={usernameRef}
          placeholder="Nome do usuário"
        />

        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  )
}

export default Join
