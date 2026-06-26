import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img
              src="https://pisoselecta.cl/wp-content/uploads/2024/01/cropped-Logo-fondo-blanco-redimencionado-1-1.jpeg"
              alt="A&M PisoSelecta"
              width="120"
              height="38"
              style={{ borderRadius: 6 }}
            />
            <p className={styles.tagline}>
              Especialistas en instalación de pisos flotantes, porcelanatos,
              cerámicos, laminados y vinílicos en Santiago y regiones cercanas.
            </p>
            <a
              href="https://wa.me/56912345678?text=Hola,%20quiero%20una%20cotización"
              className={styles.whatsappBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.997 2C6.477 2 2 6.484 2 12.017c0 1.99.52 3.847 1.426 5.454L2 22l4.644-1.396A9.927 9.927 0 0011.997 22C17.52 22 22 17.516 22 11.983 22 6.484 17.52 2 11.997 2zm0 18.006a7.944 7.944 0 01-4.27-1.245l-.306-.185-3.167.952.908-3.098-.2-.318a7.96 7.96 0 01-1.966-5.112C2.996 7.13 7.11 3.012 12 3.012c4.886 0 9 4.12 9 9.004 0 4.887-4.114 8.99-9.003 8.99z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className={styles.links}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Servicios</h4>
              <ul>
                <li><a href="https://pisoselecta.cl/piso-flotante/" target="_blank" rel="noopener noreferrer">Piso Flotante</a></li>
                <li><a href="https://pisoselecta.cl/piso-ceramicos/" target="_blank" rel="noopener noreferrer">Piso Cerámico</a></li>
                <li><a href="https://pisoselecta.cl/piso-laminado/" target="_blank" rel="noopener noreferrer">Piso Laminado</a></li>
                <li><a href="https://pisoselecta.cl/piso-porcelanato/" target="_blank" rel="noopener noreferrer">Porcelanato</a></li>
                <li><a href="https://pisoselecta.cl/piso-vinilico/" target="_blank" rel="noopener noreferrer">Piso Vinílico</a></li>
                <li><a href="https://pisoselecta.cl/piso-radier/" target="_blank" rel="noopener noreferrer">Radier Terrazas</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Empresa</h4>
              <ul>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#faq">Preguntas frecuentes</a></li>
                <li><a href="https://pisoselecta.cl/galeria/" target="_blank" rel="noopener noreferrer">Galería</a></li>
                <li><a href="https://pisoselecta.cl/nuestros-precios/" target="_blank" rel="noopener noreferrer">Precios</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Grupo Selecta</h4>
              <ul>
                <li><a href="https://fachadaselecta.cl/" target="_blank" rel="noopener noreferrer">FachadaSelecta</a></li>
                <li><a href="https://cocinaselecta.cl/" target="_blank" rel="noopener noreferrer">CocinaSelecta</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} A&M PisoSelecta. Todos los derechos reservados.</p>
          <p>Santiago, Chile</p>
        </div>
      </div>
    </footer>
  )
}
