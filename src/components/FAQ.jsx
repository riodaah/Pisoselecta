import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Para solicitar una cotización, puedes contactarnos a través de nuestra página de contacto o directamente por WhatsApp. Cuanto más específico seas en tu descripción, más precisa será nuestra respuesta. Estamos disponibles para ayudarte.',
  },
  {
    q: '¿Cómo agendo una visita técnica gratis?',
    a: 'Agendar una visita técnica es muy sencillo. Solo contáctanos por WhatsApp o formulario de contacto. Una vez nos des tu ubicación y los detalles del proyecto, coordinaremos una fecha y hora que te acomode. Este servicio es gratuito y sin compromiso.',
  },
  {
    q: '¿Se puede instalar piso flotante o vinílico sobre madera?',
    a: 'Sí, es posible siempre y cuando la superficie de madera esté en buenas condiciones, sea plana, estable y sin humedad. Antes de instalar verificamos que la madera esté bien fijada y sin tablas dañadas. Para el vinílico recomendamos una lámina niveladora para mejores resultados.',
  },
  {
    q: '¿Los pisos vinílicos son resistentes al agua?',
    a: 'Sí, los pisos vinílicos son conocidos por su excelente resistencia al agua, lo que los hace ideales para cocinas, baños y lavaderías. Es importante asegurar una correcta instalación para evitar filtraciones en las juntas.',
  },
  {
    q: '¿Puedo instalar piso flotante o vinílico sobre concreto?',
    a: 'Absolutamente. Ambos tipos se instalan perfectamente sobre concreto, siempre que la superficie esté nivelada, seca y limpia. Para el piso flotante recomendamos usar una barrera contra la humedad como medida preventiva.',
  },
  {
    q: '¿Cómo se limpia y mantiene un piso vinílico?',
    a: 'El piso vinílico es muy fácil de mantener. Basta con barrer o aspirar regularmente y pasar un trapeador húmedo cuando sea necesario. Evita productos abrasivos o limpiadores con solventes que puedan dañar el acabado superficial.',
  },
]

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={onClick} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.icon} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className={styles.answerWrap}>
        <p className={styles.answer}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Preguntas frecuentes</span>
          <h2 className={styles.heading}>Resolvemos tus<br />dudas</h2>
        </div>

        <div className={styles.list} role="list">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div className={styles.cta}>
          <p>¿Tienes otra pregunta?</p>
          <a
            href="https://wa.me/56912345678?text=Hola,%20tengo%20una%20consulta"
            className={styles.ctaBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
