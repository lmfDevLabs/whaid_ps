# Frontend público de Whaid

## Requisitos

- Node.js compatible con Next.js 16.
- npm, usando `package-lock.json` como lockfile.

## Instalación

```bash
npm install
```

## Variables de entorno

El Blog usa la configuración pública de Firebase/Firestore definida en `lib/blogApi.js`. Declara únicamente variables públicas o de servidor requeridas por el entorno de despliegue; no guardes secretos reales en el repositorio.

El formulario de demo requiere `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y `NEXT_PUBLIC_DEMO_FORM_API_URL`. Son los únicos valores del flujo expuestos al navegador; Resend, la secret key de Turnstile, el destinatario y el secreto del rate limit viven exclusivamente en Firebase Functions. Consulta `../.env.example` y `../backend_saas/functions/README.md` para la configuración completa.

## Comandos

- `npm run dev`: servidor local de Next.js.
- `npm run build`: build de producción.
- `npm run start`: sirve el build.
- `npm run validate:i18n`: valida paridad y valores no vacíos en diccionarios ES/EN.
- `npm run lint`: lint de Next.js.
- `npm run check`: validación i18n, lint y build.

## Rutas principales

- `/`: landing pública.
- `/blog`: listado del Blog.
- `/blog/[slug]`: detalle de artículo.
- `/social/whaid-og-default.png`: imagen Open Graph dinámica de fallback.

## Organización

- `app/`: rutas App Router y metadatos.
- `components/layout/`: navegación, footer, redes y WhatsApp flotante.
- `components/home/`: secciones del Home.
- `components/blog/`: bloques reutilizables del Blog.
- `i18n/`: proveedor de idioma, hook y diccionarios.
- `lib/`: APIs, metadatos sociales y utilidades de medios.
- `styles/`: CSS global, layout, Home y Blog.
- `public/`: scripts públicos heredados mínimos y assets servidos estáticamente.

## Idiomas

`LanguageProvider` persiste el idioma seleccionado y expone `t()` a componentes cliente. Los diccionarios `i18n/dictionaries/es.js` y `i18n/dictionaries/en.js` deben conservar las mismas claves y se validan con `npm run validate:i18n`.

## Blog, imágenes y videos

El Blog obtiene artículos desde la integración en `lib/blogApi.js`, normaliza metadatos sociales en `lib/blogSocialMetadata.js` y renderiza Markdown con componentes dedicados. Los medios mantienen fallbacks para imágenes, YouTube y MP4; la construcción de embeds de YouTube vive en `lib/media/youtube.js`.
