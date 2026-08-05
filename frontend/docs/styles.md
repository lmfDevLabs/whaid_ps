# Estilos del frontend

## Importación

`app/layout.jsx` importa una sola vez los CSS globales: `globals.css`, `styles.css`, `chrome.css`, `home.css` y `blog.css`. `home.css` es el punto de composición del Home y debe mantener el orden de imports para preservar la cascada.

## Organización

- `styles/globals.css`: entrada global mínima.
- `styles/styles.css`: variables, base visual compartida y utilidades globales.
- `styles/chrome.css`: navegación y footer.
- `styles/home.css`: índice de estilos del Home.
- `styles/home/hero.css`: Hero y mock de WhatsApp principal.
- `styles/home/qa-strip.css`: tira de preguntas.
- `styles/home/pitch.css`: bloque de video pitch.
- `styles/home/sections.css`: encabezados compartidos de secciones.
- `styles/home/keyshots.css`: grid de keyshots.
- `styles/home/use-cases.css`: casos de uso y visuales.
- `styles/home/contact.css`: formulario demo/contacto.
- `styles/home/information-types.css`: tarjetas de tipos de información.
- `styles/home/take-a-look.css`: showcase grande.
- `styles/home/other-possibilities.css`: videos y posibilidades adicionales.
- `styles/home/pricing.css`: pricing y logos.
- `styles/home/security.css`: seguridad.
- `styles/home/whatsapp-badge.css`: botón flotante de WhatsApp.
- `styles/blog.css`: listado, detalle y Markdown del Blog.

## Convenciones

Mantener clases existentes, variables CSS y breakpoints. Para una sección nueva del Home, crear un archivo en `styles/home/` e importarlo desde `home.css` en el punto exacto donde deba participar en la cascada. Los estilos de layout y tokens compartidos deben permanecer globales; evita duplicar reglas o reordenar media queries sin comparar el resultado visual.
