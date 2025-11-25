import '../css/hero.css'
export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Bem-vindo(a) ao nosso espaço de apoio e informação</h1>

        <p className="hero-sub">
          Aqui você encontra orientação, ferramentas e profissionais para acompanhar seu afastamento, 
          reabilitação e defesa dos seus direitos.
        </p>

        <div className="hero-ctas">
          <a className="btn primary" href="#como-ajudamos">Quero ajuda agora</a>
          <a className="btn outline" href="#encontre">Encontrar um profissional</a>
        </div>
      </div>

      <div className="hero-illustration" aria-hidden>
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="200" rx="12" fill="#EAF4FF" />
          <circle cx="60" cy="90" r="28" fill="#D0E9FF" />
          <rect x="110" y="55" width="140" height="100" rx="8" fill="#BEE6FF" />
        </svg>
      </div>
    </header>
  )
}
