import { useState } from 'react'
import '../css/faqs.css'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)

  // 🔹 TUDO DENTRO DA FUNÇÃO EM OBJETOS COM PARÁGRAFOS
  const faqs = [
    { 
      q: 'Como funciona o Auxílio por Incapacidade Temporária?', 
      a: (
        <>
          <p>
            O Auxílio por Incapacidade Temporária é um benefício pago pelo INSS
            quando o trabalhador fica impossibilitado de exercer suas atividades
            temporariamente devido a doença, lesão ou acidente.
          </p>

        </>
      )
    },

    { 
      q: 'O que levar na perícia do INSS?', 
      a: (
        <>
          <p>Para ter melhores chances de aprovação, leve:</p>
          <p>• Laudos médicos recentes</p>
          <p>• Exames atualizados</p>
          <p>• Relatórios do médico assistente</p>
          <p>• Comprovantes da sua limitação funcional</p>
          <p>• Documentos pessoais e CPF</p>
        </>
      )
    },

    { 
      q: 'Posso trabalhar durante o afastamento?', 
      a: (
        <>
          <p>
            Trabalhar enquanto recebe benefício pode gerar suspensão ou cancelamento.
          </p>
          <p>
            Alguns benefícios permitem atividades específicas, mas a maioria
            proíbe qualquer forma de trabalho remunerado durante o afastamento.
          </p>
        </>
      )
    },

    { 
      q: 'Como pedir recurso do INSS?', 
      a: (
        <>
          <p>
            Para entrar com recurso, você deve apresentar novos documentos,
            laudos atualizados e argumentos claros contra a decisão.
          </p>
          <p>
            O recurso é feito dentro do app Meu INSS ou presencialmente.
          </p>
        </>
      )
    }
  ]

  return (
    <section className="faq">
      <h2>Perguntas rápidas</h2>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button 
              onClick={() => toggle(i)} 
              className="faq-q"
              aria-expanded={open === i}
            >
              {f.q}
              <span className="arrow">⌄</span>
            </button>

            <div className="faq-a">
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
