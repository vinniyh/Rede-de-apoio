import { useState } from "react";
import "../pages/artigos/artigos.css";

const MainArtigos = () => {
  const [index, setIndex] = useState(0);

  const totalCards = 9;

  const next = () => {
    if (index + 3 < totalCards) setIndex(index + 3);
  };

  const prev = () => {
    if (index - 3 >= 0) setIndex(index - 3);
  };

  return (
    <main className="container-artigos">
      <h1>Artigos</h1>

      <div className="carousel">
        <button className="arrow" onClick={prev}>
          {"<"}
        </button>

        <div className="cards-artigos">

          {/* GRUPO 1 */}
          {index === 0 && (
            <>
              <div className="card">
                <h2>O que fazer logo após um diagnóstico ou acidente?</h2>
                <p>
                  Receber um diagnóstico sério ou ter um acidente que exige afastamento do trabalho pode provocar uma avalanche de emoções...
                </p>
                <nav>
                  <div>
                    <span>- Comunique à empresa: </span>
                    <a href="#">Saiba como</a>
                  </div>
                  <div>
                    <span>- Busque Atendimento médico: </span>
                    <a href="#">Saiba como</a>
                  </div>
                  <div>
                    <span>- Reúna documentos: </span>
                    <a href="#">Saiba como</a>
                  </div>
                  <div>
                    <span>- Registre tudo: </span>
                    <a href="#">Saiba como</a>
                  </div>
                  <div>
                    <span>- Solicite o benefício no INSS: </span>
                    <a href="#">Saiba como</a>
                  </div>
                </nav>
              </div>

              <div className="card">
                <h2>Como funciona o afastamento pelo INSS</h2>
                <p>
                  Para quem está incapacitado de trabalhar por doença ou acidente...
                </p>
                <h4>Aqui está um breve guia:</h4>
                <div><span>- Requisitos: </span><a href="#">Saiba como</a></div>
                <div><span>- Perícia Médica: </span><a href="#">Saiba como</a></div>
                <div><span>- Documentação Necessária: </span><a href="#">Saiba como</a></div>
                <div><span>- Solicitação: </span><a href="#">Saiba como</a></div>
              </div>

              <div className="card">
                <h2>Seus direitos durante o afastamento</h2>
                <p>Estar afastado do trabalho por motivos de saúde não significa perder direitos...</p>
                <div><span>- Auxílio por incapacidade temporária: </span><a href="#">Saiba como</a></div>
                <div><span>- Estabilidade: </span><a href="#">Saiba como</a></div>
                <div><span>- Auxílio-acidente: </span><a href="#">Saiba como</a></div>
                <div><span>- Reabilitação profissional: </span><a href="#">Saiba como</a></div>
                <div><span>- Aposentadoria por invalidez: </span><a href="#">Saiba como</a></div>
              </div>
            </>
          )}

          {/* GRUPO 2 */}
          {index === 3 && (
            <>
              <div className="card">
                <h2>Principais leis que protegem o trabalhador</h2>
                <p>A base legal para muitos dos direitos está na Lei 8.213/91...</p>
                <h4>Pontos importantes:</h4>
                <div><span>- Define acidente de trabalho...</span></div>
                <div><span>- Benefícios previdenciários.</span></div>
                <div><span>- Carência e exceções.</span></div>
                <div><span>- Obrigatoriedade da CAT.</span></div>
                <a href="#">Leia mais</a>
              </div>

              <div className="card">
                <h2>Preciso de advogado?</h2>
                <p>Nem sempre é necessário, mas em alguns casos ajuda:</p>

                <h4>Talvez não precise:</h4>
                <span>- Pedido simples e documentos corretos.</span>

                <h4>Quando é recomendado:</h4>
                <span>- Indeferimento do benefício.</span>

                <a href="#">Leia mais</a>
              </div>

              <div className="card">
                <h2>Órgãos públicos que podem te ajudar</h2>
                <p>Existem serviços gratuitos que auxiliam trabalhadores.</p>

                <div><span>- INSS: </span><a href="#">Saiba como</a></div>
                <div><span>- Defensoria Pública: </span><a href="#">Saiba como</a></div>
                <div><span>- MPT: </span><a href="#">Saiba como</a></div>
                <div><span>- CRAS: </span><a href="#">Saiba como</a></div>
                <div><span>- Centros de reabilitação: </span><a href="#">Saiba como</a></div>
              </div>
            </>
          )}

          {/* GRUPO 3 */}
          {index === 6 && (
            <>
              <div className="card">
                <h2>Perícia médica: como se preparar</h2>
                <p>A perícia é decisiva. Veja como estar preparado:</p>
                <a href="#">Leia mais</a>
              </div>

              <div className="card">
                <h2>Retorno ao trabalho: o que esperar</h2>
                <p>Dúvidas sobre voltar ao trabalho depois do afastamento?</p>
                <a href="#">Leia mais</a>
              </div>

              <div className="card">
                <h2>Como criar sua conta do INSS</h2>
                <p>Saiba como baixar o app, criar conta e acessar o Meu INSS.</p>

                <div><span>- Baixar app: </span><a href="#">Saiba como</a></div>
                <div><span>- Criar conta Gov.br: </span><a href="#">Saiba como</a></div>
                <div><span>- Verificar dados: </span><a href="#">Saiba como</a></div>
                <div><span>- Criar senha: </span><a href="#">Saiba como</a></div>
              </div>
            </>
          )}

        </div>

        <button className="arrow" onClick={next}>
          {">"}
        </button>
      </div>
    </main>
  );
};

export default MainArtigos;
