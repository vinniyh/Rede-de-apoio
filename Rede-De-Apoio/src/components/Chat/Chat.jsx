import React, { useRef, useState, useEffect } from "react";
import '../../css/chat.css';

const Chat = ({ socket }) => {
  const messageRef = useRef();
  const bottomRef = useRef();

  const [messageList, setMessageList] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  // RECEBER MENSAGENS
  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList((current) => [...current, data]);
      scrollToBottom();
    });

    // RECEBER INFO DE QUEM ESTÁ DIGITANDO
    socket.on("typing", (data) => {
      setTypingUser(data.username);

      // Some depois de 2s
      setTimeout(() => setTypingUser(""), 2000);
    });

    return () => {
      socket.off('receive_message');
      socket.off('typing');
    };
  }, [socket]);

  // AUTO SCROLL
  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ENVIAR MENSAGEM
  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit('message', message);
    messageRef.current.value = "";
  };

  // QUANDO COMEÇA A DIGITAR
  const handleTyping = () => {
    socket.emit("typing");
  };

  return (
    <div className="chat-container">

      <div className="chat-body">

        {messageList.map((msg, i) => (
          <div key={i} className="msg-line">
            <img className="avatar" src="/avatar.png" />
            <p>
              <strong>{msg.author}:</strong> {msg.text}
            </p>
          </div>
        ))}

        {/* Exibe o nome da pessoa que está digitando */}
        {typingUser && (
          <p className="typing">{typingUser} está digitando...</p>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="chat-input">
        <input
          type="text"
          ref={messageRef}
          onChange={handleTyping}
          placeholder="Mensagem..."
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>

    </div>
  );
};

export default Chat;
