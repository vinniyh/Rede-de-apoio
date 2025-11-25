import Card from "../components/Card"
import Hero from "../components/Hero"
import ProfessionalCard from "../components/ProfessionalCard"
import ContactForm from "../components/ContactForm"
import "../css/home.css"

export default function HomeMain() {
  return (
    <div className="home-page">
      <Hero />

      <main className="home-main">

        
        <section id="como-ajudamos" className="how-help section">
          <h2 className="section-title">Como podemos te ajudar?</h2>
          <p className="section-sub">Escolha uma das opções abaixo para começar.</p>

          <div className="cards-grid fade-in">
            <Card title="Falar com Psicólogo" icon="🧠" description="Apoio emocional e orientação psicológica." />
            <Card title="Orientação Jurídica" icon="⚖️" description="Acompanhamento sobre direitos e INSS." />
            <Card title="Reabilitação" icon="🤸" description="Fisioterapia e programas de retorno ao trabalho." />
            <Card title="Modelos de Documentos" icon="📄" description="Laudos, requerimentos e recursos." />
            <Card title="Vídeos e Guias" icon="🎥" description="Conteúdos explicativos passo a passo." />
            <Card title="Comunidade" icon="🤝" description="Troca de experiências reais." />
          </div>
        </section>

        
        <section id="encontre" className="find-pros section">
          <h2 className="section-title">Encontre profissionais</h2>
          <p className="section-sub">Selecione um profissional e preencha o formulário.</p>

          <div className="find-grid slide-up">
            <ProfessionalCard role="Psicólogo" />
            <ProfessionalCard role="Advogado" />
            <ProfessionalCard role="Fisioterapeuta" />
          </div>
        </section>

        
        <section className="contact-block">
          <ContactForm />
        </section>

      </main>
    </div>
  )
}
