import styles from './WhyUs.module.css'

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Calidad garantizada',
    desc: 'Cada instalación lleva nuestra garantía por escrito. Trabajamos con los mejores materiales y técnicas del mercado.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Visita técnica gratis',
    desc: 'Te visitamos sin costo ni compromiso para evaluar tu proyecto y entregarte la cotización más precisa del mercado.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instalación rápida',
    desc: 'Coordinamos el proyecto para que la instalación sea rápida, limpia y con mínima interrupción de tu rutina.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Equipo especializado',
    desc: 'Nuestros instaladores tienen años de experiencia en cada tipo de revestimiento, con capacitación continua.',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>¿Por qué elegirnos?</span>
          <h2 className={styles.heading}>
            La diferencia está<br />
            en los <span className={styles.accent}>detalles</span>
          </h2>
          <p className={styles.sub}>
            En A&M PisoSelecta llevamos años transformando hogares y negocios en
            Santiago y regiones cercanas. Nuestro enfoque combina materiales de
            calidad, técnicas probadas y un servicio que va más allá de la instalación.
          </p>
          <a
            href="https://wa.me/56912345678?text=Hola,%20quiero%20solicitar%20una%20cotización"
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar cotización
          </a>
        </div>

        <div className={styles.right}>
          {pillars.map((p, i) => (
            <div key={i} className={styles.pillar}>
              <div className={styles.iconWrap}>{p.icon}</div>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
