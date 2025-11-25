import '../css/contactForm.css'
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ tipo: "", situacao: "", mensagem: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado!");
    setForm({ tipo: "", situacao: "", mensagem: "" });
  };

  return (
    <section className="contact-form" id="contato">
      <h2>Conte sua situação</h2>
      <p className="muted">Preencha e receberá orientação inicial.</p>

      <form onSubmit={handleSubmit} className="mini-form">
        <label>
          Tipo de problema
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="acidente">Acidente</option>
            <option value="doenca">Doença</option>
            <option value="outro">Outro</option>
          </select>
        </label>

        <label>
          Situação atual
          <select
            name="situacao"
            value={form.situacao}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="afastado">Afastado</option>
            <option value="aguardando">Aguardando perícia</option>
            <option value="retorno">Retornando ao trabalho</option>
          </select>
        </label>

        <label>
          Mensagem
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows="4"
            placeholder="Descreva brevemente"
          />
        </label>

        <div className="form-actions">
          <button className="btn primary" type="submit">
            Enviar
          </button>
          <a className="btn outline">Whatsapp</a>
        </div>
      </form>
    </section>
  );
}
