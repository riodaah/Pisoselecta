import styles from './Services.module.css'

const services = [
  {
    id: 'flotante',
    title: 'Piso Flotante',
    desc: 'Instalación profesional de piso flotante con acabados perfectos que realzarán cualquier espacio de tu hogar o negocio.',
    img: 'https://pisoselecta.cl/wp-content/uploads/2024/01/Piso-flotante-1024x574.png',
    href: 'https://pisoselecta.cl/piso-flotante/',
    tag: 'Más solicitado',
  },
  {
    id: 'ceramico',
    title: 'Piso Cerámico',
    desc: 'Colocación de cerámicos elegantes y resistentes para tu hogar o negocio. Transformamos tu espacio con materiales de primera.',
    img: 'https://pisoselecta.cl/wp-content/uploads/2024/01/Tipos-de-piso-1-1024x574.png',
    href: 'https://pisoselecta.cl/piso-ceramicos/',
    tag: null,
  },
  {
    id: 'porcelanato',
    title: 'Porcelanato',
    desc: 'Sofisticación y resistencia en cada metro cuadrado. Expertos en instalación de porcelanato en Santiago y alrededores.',
    img: 'https://pisoselecta.cl/wp-content/uploads/2024/01/Piso-vinilico-2-1024x574.png',
    href: 'https://pisoselecta.cl/piso-porcelanato/',
    tag: null,
  },
  {
    id: 'vinilico',
    title: 'Piso Vinílico',
    desc: 'Versátil, moderno y resistente al agua. Ideal para cocinas, baños y áreas de alto tráfico. Acabados impecables y duraderos.',
    img: 'https://pisoselecta.cl/wp-content/uploads/2024/01/Piso-Vinilico-cafe-1024x574.png',
    href: 'https://pisoselecta.cl/piso-vinilico/',
    tag: null,
  },
  {
    id: 'laminado',
    title: 'Piso Laminado',
    desc: 'Instalación de piso laminado de alta calidad que se siente y se ve increíble. Rápido, limpio y sin complicaciones.',
    img: 'https://pisoselecta.cl/wp-content/uploads/2024/01/Piso-flotante-1024x574.png',
    href: 'https://pisoselecta.cl/piso-laminado/',
    tag: null,
  },
  {
    id: 'radier',
    title: 'Radier Terrazas',
    desc: 'Instalación de radier para terrazas y estacionamientos. Superficies resistentes y estéticamente atractivas para exteriores.',
    img: 'https://pisoselecta.cl/wp-content/uploads/2024/01/Instalacion-de-radier.png',
    href: 'https://pisoselecta.cl/piso-radier/',
    tag: null,
  },
]

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nuestros servicios</span>
          <h2 className={styles.heading}>Todo tipo de piso,<br />una sola empresa</h2>
          <p className={styles.sub}>
            Instalamos cualquier tipo de revestimiento de piso con la más alta calidad,
            garantizando durabilidad y un acabado estético excepcional.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <article key={s.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              <div className={styles.imgWrap}>
                <img src={s.img} alt={s.title} loading="lazy" />
                {s.tag && <span className={styles.tag}>{s.tag}</span>}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <a href={s.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                  Ver más
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
