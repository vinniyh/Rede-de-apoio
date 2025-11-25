import '../css/professionalCard.css'

export default function ProfessionalCard({ role }) {
  return (
    <div className="pro-card">
      <div className="pro-avatar">{role.charAt(0)}</div>
      <div className="pro-info">
        <strong>{role}</strong>
        <p className="muted">Atendimento e agendamento</p>
      </div>
      <a className="btn small" href="#contato">
        Entrar
      </a>
    </div>
  );
}
