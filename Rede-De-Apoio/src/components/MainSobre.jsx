import "../pages/sobre/sobre.css";

export default function MainSobre() {
  return (
    <>
      {/* HERO */}
      <header className="sobre-hero">
        <div className="sobre-hero-content">
          <h1>Sobre nós</h1>
          <p>
            Cuidamos de quem foi surpreendido pela vida e precisa de orientação,
            apoio e humanidade. Aqui, você não caminha sozinho(a).
          </p>
        </div>
      </header>

      <main className="sobre-container">

        {/* MISSÃO / VISÃO / VALORES */}
        <section className="mv-section fade-in">
          <h2 className="sec-title">Nosso propósito</h2>

          <div className="mv-grid">
            <div className="mv-card">
              <span className="mv-icon">🎯</span>
              <h3>Missão</h3>
              <p>
                Ajudar pessoas afastadas ou em reabilitação a entender seus
                direitos e encontrarem apoio emocional, jurídico e humano.
              </p>
            </div>

            <div className="mv-card">
              <span className="mv-icon">👁️</span>
              <h3>Visão</h3>
              <p>
                Ser a maior plataforma de orientação acessível para quem depende
                do INSS, conectando informação e acolhimento.
              </p>
            </div>

            <div className="mv-card">
              <span className="mv-icon">🤝</span>
              <h3>Valores</h3>
              <p>
                Empatia, responsabilidade, clareza e compromisso com quem está
                vivendo um momento difícil.
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="timeline-section slide-up">
          <h2 className="sec-title">Nossa jornada</h2>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>2025 — O início</h3>
              <p>
                Pessoas em processo de reabilitação ...
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>2025 — A comunidade cresce</h3>
              <p>
                Centenas de relatos...
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>2025 — Nasce a plataforma</h3>
              <p>
                Transformamos dor e experiência em algo maior: um espaço
                organizado, humano e acessível.
              </p>
            </div>

          </div>
        </section>

        {/* HISTÓRIA EM IMAGENS */}
        <section className="story-section fade-in">
          <h2 className="sec-title">Nossa história</h2>

          <div className="story-grid">
            <div className="story-card">
              <img src="/sobre1.png" alt="Acolhimento" />
              <p>
                Este projeto nasceu de histórias reais. Pessoas que viveram
                acidentes, diagnósticos, exames, perícias e longas esperas.
              </p>
            </div>

            <div className="story-card">
              <img src="/sobre2.png" alt="União" />
              <p>
                Reunimos conhecimento, apoio psicológico, jurídico e emocional
                para transformar a dor em força.
              </p>
            </div>

            <div className="story-card">
              <img src="/sobre3.png" alt="Apoio" />
              <p>
                Hoje, construímos uma rede que devolve dignidade e orientação a
                quem mais precisa.
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="team-section slide-up">
          <h2 className="sec-title">Quem faz parte</h2>

          <div className="team-grid">
            <div className="team-card">
              <div className="avatar">A</div>
              <h3>Arthur Vinicius</h3>
              <p>Desenvolvedor & fundador da plataforma.</p>
            </div>

            <div className="team-card">
              <div className="avatar">E</div>
              <h3>Equipe de Apoio</h3>
              <p>Colegas de classe.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
