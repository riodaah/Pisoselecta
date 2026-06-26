# PisoSelecta – Sitio React Moderno

Sitio web moderno para A&M PisoSelecta, construido con React + Vite, listo para desplegar en Vercel.

## Stack

- **Framework**: React 18 + Vite
- **Estilos**: CSS Modules (sin librerías externas)
- **Fuentes**: Inter + Plus Jakarta Sans (Google Fonts)
- **Deploy**: Vercel

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Vercel

### Opción 1 — Vercel CLI (recomendado)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opción 2 — GitHub + Vercel Dashboard

1. Crea un repositorio en GitHub y sube este proyecto
2. Ve a [vercel.com](https://vercel.com) → "New Project"
3. Importa el repositorio
4. Vercel detecta automáticamente que es Vite
5. Haz clic en "Deploy"

## Personalización pendiente

- [ ] Reemplazar número de WhatsApp (`56912345678`) con el número real
- [ ] Actualizar imágenes con fotos propias del equipo y proyectos
- [ ] Agregar la página de galería (`/galeria`)
- [ ] Agregar formulario de contacto
- [ ] Configurar dominio personalizado en Vercel
- [ ] Agregar Google Analytics / GTM

## Estructura del proyecto

```
src/
  components/
    Navbar.jsx/.module.css      — Barra de navegación fija
    Hero.jsx/.module.css        — Sección portada con parallax
    Services.jsx/.module.css    — Grid de 6 servicios
    WhyUs.jsx/.module.css       — Beneficios / por qué elegirnos
    Testimonials.jsx/.module.css — Testimonios de clientes
    FAQ.jsx/.module.css         — Preguntas frecuentes (accordion)
    GrupoSelecta.jsx/.module.css — Empresas del grupo
    Footer.jsx/.module.css      — Footer con links y contacto
    WhatsAppButton.jsx/.module.css — Botón flotante WhatsApp
  App.jsx
  main.jsx
  index.css                     — Variables CSS globales
```
