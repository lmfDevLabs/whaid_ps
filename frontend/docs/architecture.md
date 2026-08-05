# Arquitectura del frontend

El frontend usa Next.js App Router en `app/`. Las páginas son Server Components por defecto y delegan interactividad puntual a componentes cliente pequeños.

```text
frontend/
  app/                 rutas, layout, metadata y OG fallback
  components/
    layout/            SiteNav, SiteFooter, redes, WhatsApp flotante
    home/              secciones de la landing
    blog/              template, markdown, autor, medios y fallbacks
  i18n/                LanguageProvider, hook, TranslatedText, diccionarios
  lib/                 Blog API, social metadata, links y utilidades de medios
  styles/              CSS global, chrome, home modular y blog
  public/              site.js reducido y wa-chat.js
```

## App Router y renderizado

`app/layout.jsx` compone el documento, carga estilos globales, Google Analytics, `wa-chat.js` y el `site.js` reducido. `/`, `/blog` y `/blog/[slug]` se renderizan con datos y componentes de servidor cuando no requieren APIs del navegador.

## Server Components

Las páginas, secciones estáticas del Home, footer y template principal del Blog permanecen como Server Components siempre que no necesiten estado, efectos o listeners. Esto limita JavaScript de cliente y conserva la separación de responsabilidades.

## Client Components

- `i18n/LanguageProvider.jsx`, `useLanguage.js` y `TranslatedText.jsx`: estado/persistencia de idioma.
- `components/layout/SiteNav.jsx`: cambio de idioma, tema, menú móvil y estado de scroll.
- `components/home/ContactSection/ContactSection.jsx`: feedback local del envío del formulario.
- `components/home/QaStrip/QaStrip.jsx`, `VideoEmbed.jsx` y `PricingServiceLogo.jsx`: interacciones o fallbacks de UI concretos.
- `components/blog/ImageWithFallback.jsx`: fallback de imagen en cliente.

## Datos y utilidades

Los datos estáticos de secciones ya viven junto a su componente cuando son específicos (`pricing.data.js`, `security.data.jsx`, `otherPossibilities.data.js`). Las utilidades compartidas están en `lib/`: API del Blog, metadatos sociales, links y construcción de URLs de YouTube.

## Idioma

React controla el contenido traducido. `public/site.js` no busca `data-i18n` ni muta textos. La paridad de claves se valida con `npm run validate:i18n`.

## Estilos

`styles/home.css` compone archivos por sección bajo `styles/home/`, manteniendo orden y especificidad de la cascada anterior. Blog y chrome conservan puntos de entrada globales propios.

## Scripts públicos restantes

`public/site.js` queda limitado a reveal-on-scroll con `IntersectionObserver` y arranque de `initWAChat` si existe. Tema, menú móvil e idioma pertenecen a React. `public/wa-chat.js` conserva la animación heredada del mock de WhatsApp.
