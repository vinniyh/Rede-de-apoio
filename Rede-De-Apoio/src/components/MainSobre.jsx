import '../pages/sobre/sobre.css';

const MainSobre = () => {
  return (
    <>
      <h1 className="titulo-sobre">Sobre nós</h1>

      <main id="container-main-sobre">
        <section className="app-section-sobre">

          <div className="card">
            <div className="box">
              <div className="content">
                <p>
                  Este site nasceu da experiência de pessoas que, assim como você, precisaram enfrentar um momento inesperado da vida: um acidente, um diagnóstico difícil ou uma condição de saúde que exigiu afastamento do trabalho. Sabemos que esse processo pode ser confuso, doloroso e cheio de incertezas. Por isso, criamos este espaço com um propósito simples e ao mesmo tempo essencial: acolher, orientar e caminhar com você.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <p>
                  Aqui, você encontrará informações claras sobre seus direitos, etapas do processo de benefício, perícia médica, documentos necessários e tudo o que pode facilitar a sua jornada no INSS. Mas também vai encontrar algo que muitas vezes falta nesse momento: empatia, compreensão e palavras que te lembram que você não está sozinho(a).
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <p>
                  Nosso conteúdo foi pensado para ser leve, direto e humano — porque entendemos que as dúvidas não são só burocráticas: elas mexem com a vida, com a rotina, com o emocional e com o futuro.
                </p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default MainSobre;
