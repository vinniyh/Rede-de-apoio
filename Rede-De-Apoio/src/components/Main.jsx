import '../css/appMain.css';

const AppMain = () => {
  return (
    <>
      <div className='titulo-main'>
        <h1>Bem-vindo(a) ao nosso espaço de apoio e informação</h1>
      </div>

      <main id="container-main">
        <section className="app-section">

          <div className="card">
            <div className="box">
              <div className="content">
                <p>
                  Este site nasceu da experiência de pessoas que, assim como você, precisaram enfrentar um momento inesperado da vida: um acidente, um diagnóstico difícil ou uma condição de saúde que exigiu afastamento do trabalho. Sabemos que esse processo pode ser confuso, doloroso e cheio de incertezas. Por isso, criamos este espaço com um propósito simples e ao mesmo tempo essencial: acolher, orientar e caminhar com você.
                </p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default AppMain;
