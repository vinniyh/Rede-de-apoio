import React from "react";
import "./galeria.css";

const Relatos = () => {

  return (
    <div className="relatos-page">

      {/* ===== LEFT FORM ===== */}
      <aside className="relatos-form-container">
        <h2>Envie Seu Relato</h2>
        <p>Compartilhe sua experiência para ajudar outras pessoas.</p>

        <form className="relato-form">
          <label>Seu Nome</label>
          <input type="text" placeholder="Digite seu nome" />

          <label>Seu E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" />

          <label>Seu Relato</label>
          <textarea rows="6" placeholder="Escreva sua história aqui..."></textarea>

          <button type="submit">Enviar Relato</button>
        </form>
      </aside>

      {/* ===== RIGHT VIDEOS ===== */}
      <section className="videos-section">
        <h1>Relatos</h1>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad,
          cum magnam sapiente doloremque amet deserunt natus ratione atque.
        </p>

        <div className="videos-grid">

          {/* ==== CARD 1 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 1</h3>
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="video1"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 1.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 2 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 2</h3>
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="video2"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 2.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 3 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 3</h3>
            <iframe
              src="https://www.youtube.com/embed/JGwWNGJdvx8"
              title="video3"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 3.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 4 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 4</h3>
            <iframe
              src="https://www.youtube.com/embed/hY7m5jjJ9mM"
              title="video4"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 4.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 5 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 5</h3>
            <iframe
              src="https://www.youtube.com/embed/e-ORhEE9VVg"
              title="video5"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 5.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 6 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 6</h3>
            <iframe
              src="https://www.youtube.com/embed/2Vv-BfVoq4g"
              title="video6"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 6.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 7 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 7</h3>
            <iframe
              src="https://www.youtube.com/embed/3AtDnEC4zak"
              title="video7"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 7.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 8 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 8</h3>
            <iframe
              src="https://www.youtube.com/embed/Va6pp0EDet8"
              title="video8"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 8.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

          {/* ==== CARD 9 ==== */}
          <div className="card-video">
            <h3>Título do Vídeo 9</h3>
            <iframe
              src="https://www.youtube.com/embed/uelHwf8o7_U"
              title="video9"
              allowFullScreen
            ></iframe>
            <p>Descrição breve sobre o vídeo 9.</p>
            <a href="https://youtube.com" target="_blank">Assistir completo</a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Relatos;
