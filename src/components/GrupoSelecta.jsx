import styles from './GrupoSelecta.module.css'

const empresas = [
  {
    name: 'PisoSelecta',
    desc: 'Instalación de pisos flotantes, cerámicos, vinílicos y más.',
    img: '/images/cropped-Logo-Principal-270x270.jpeg',
    href: 'https://pisoselecta.cl/',
    current: true,
  },
  {
    name: 'FachadaSelecta',
    desc: 'Especialistas en revestimientos y fachadas de alta calidad.',
    img: '/images/FachadaSelecta-Logo-sin-fondo.png',
    href: 'https://fachadaselecta.cl/',
    current: false,
  },
  {
    name: 'CocinaSelecta',
    desc: 'Diseño e instalación de cocinas modernas y funcionales.',
    img: '/images/Logo-Oficial-sin-fondo-chico-1-fina-final-1024x663.png',
    href: 'https://cocinaselecta.cl/',
    current: false,
  },
]

export default function GrupoSelecta() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Grupo Selecta</span>
          <h2 className={styles.heading}>Parte de una familia<br />de especialistas</h2>
          <p className={styles.sub}>
            Somos parte del Grupo Selecta, un conjunto de empresas especializadas
            en transformar espacios con calidad y garantía.
          </p>
        </div>

        <div className={styles.grid}>
          {empresas.map((e) => (
            <a
              key={e.name}
              href={e.href}
              className={`${styles.card} ${e.current ? styles.current : ''}`}
              target={e.current ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrap}>
                <img src={e.img} alt={`Logo ${e.name}`} />
              </div>
              <h3 className={styles.cardName}>{e.name}</h3>
              <p className={styles.cardDesc}>{e.desc}</p>
              {e.current && <span className={styles.currentBadge}>Estás aquí</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
