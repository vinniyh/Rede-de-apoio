import '../css/card.css'

export default function Card({ title, icon, description }) {
  return (
    <article className="card-hero" tabIndex={0} role="button">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-cta">Saiba mais →</div>
    </article>
  );
}
