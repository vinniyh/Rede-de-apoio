import React, { useState } from 'react';
import '../pages/facaParte/facaParte.mudule.css';

const MainFacaParte = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="container-facaparte">

      {/* MENU LATERAL RECOLHÍVEL */}
      <aside className={open ? "menu-lateral aberto" : "menu-lateral"}>

        {/* BOTÃO SETA */}
        <button 
          className="btn-toggle" 
          onClick={() => setOpen(!open)}
        >
          {open ? "<" : ">"}
        </button>

        {open && (
          <>
            <h2>Áreas de Apoio</h2>
            <nav>
              <a href="#formulario">Psicólogo</a>
              <a href="#formulario">Advogado</a>
              <a href="#formulario">Motorista</a>
              <a href="#formulario">Fisioterapeuta</a>
            </nav>
          </>
        )}

      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="conteudo-faca-parte">
        <h1>Faça parte e apoie a causa</h1>

        <div className="card-faca-parte">
          <h3>Por que ajudar?</h3>
          <p>
            Muitas pessoas que sofreram acidentes ou receberam diagnósticos incapacitantes
            passam por dificuldades emocionais, físicas e financeiras. Sua ajuda como profissional
            pode transformar essa jornada.
          </p>
        </div>

        <section id="formulario" className="formulario">
          <h3>Preencha o formulário para fazer parte</h3>
          <form>
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
            <input type="text" placeholder="Área de atuação" />
            <textarea placeholder="Como você pode ajudar?" rows="4"></textarea>
            <button>Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MainFacaParte;
