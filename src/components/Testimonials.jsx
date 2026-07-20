import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Javier M.',
    location: 'Santiago',
    img: '/images/WhatsApp-Image-2023-08-15-at-15.33.37-2.jpeg',
    text: 'Desde que contratamos a A&M PisoSelecta para instalar nuestro piso flotante, nuestra sala luce espectacular. El acabado es perfecto y el servicio fue más que profesional. ¡Recomendado!',
    stars: 5,
  },
  {
    name: 'Carolina P.',
    location: 'Santiago',
    img: '/images/WhatsApp-Image-2023-08-15-at-15.33.38.jpeg',
    text: 'Estaba indecisa sobre qué tipo de piso quería para mi cocina. A&M PisoSelecta me sugirió el vinílico y fue un acierto total. Es resistente y muy fácil de limpiar. ¡Gracias por el asesoramiento!',
    stars: 5,
  },
  {
    name: 'Felipe A.',
    location: 'Santiago',
    img: '/images/WhatsApp-Image-2023-08-15-at-15.33.36-1.jpeg',
    text: 'A&M PisoSelecta transformó nuestro estudio con un piso laminado de alta calidad. Se siente y se ve increíble. La instalación fue rápida y sin complicaciones.',
    stars: 5,
  },
  {
    name: 'Bárbara G.',
    location: 'Santiago',
    img: '/images/WhatsApp-Image-2023-08-15-at-15.33.38-1.jpeg',
    text: 'Elegimos cerámicas para nuestro patio y A&M PisoSelecta hizo un trabajo extraordinario. Estamos muy contentos con el resultado y con la atención que recibimos.',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonios</span>
          <h2 className={styles.heading}>Lo que dicen<br />nuestros clientes</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`${styles.card} ${i === active ? styles.active : ''}`}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActive(i)}
              aria-pressed={i === active}
            >
              <Stars count={t.stars} />
              <p className={styles.quote}>"{t.text}"</p>
              <div className={styles.author}>
                <img src={t.img} alt={t.name} className={styles.avatar} loading="lazy" />
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorLoc}>{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
