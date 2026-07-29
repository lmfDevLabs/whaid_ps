# Whaid public site

Repositorio de la experiencia web pública de Whaid. La aplicación desplegable vive en [`frontend/`](frontend/).

## Stack y requisitos

- Next.js 16 (App Router), React 19 y CSS global.
- Node.js 20+ y npm con soporte para `package-lock.json`.
- API HTTP externa para el Blog; no se necesitan secretos para construir el sitio.

## Instalación y ejecución

```bash
npm ci --prefix frontend
npm --prefix frontend run dev
npm --prefix frontend run build
npm --prefix frontend run start
```

Variables conocidas:

- `NEXT_PUBLIC_BLOG_API_BASE_URL`: base pública del API del Blog.
- `BLOG_API_BASE_URL`: alternativa server-side para la misma base.
- `NEXT_PUBLIC_SITE_URL`: origen canónico utilizado en metadata y enlaces sociales.

Si no se configuran, el código conserva los valores públicos de producción. Nunca se deben versionar credenciales.

## Rutas públicas

- `/`: landing pública.
- `/blog`: artículos publicados.
- `/blog/[slug]`: artículo individual.
- `/social/whaid-og-default.png`: imagen social por defecto.

## Estructura

- `frontend/app`: rutas, layouts y metadata; las rutas deben limitarse a componer y obtener datos.
- `frontend/components/layout`: navegación, footer y elementos globales.
- `frontend/components/home`: secciones del Home y boundaries interactivos pequeños.
- `frontend/components/blog`: presentación del listado y del artículo.
- `frontend/lib`: acceso a datos, URLs sociales y utilidades puras.
- `frontend/public`: assets y scripts globales heredados (`site.js`, `wa-chat.js`).
- `frontend/styles`: puntos de entrada CSS global y bloques progresivamente separados.

El Home se compone en `frontend/app/page.jsx`; los detalles viven por sección. El Blog obtiene datos mediante `lib/blogApi.js`, normaliza medios y genera Open Graph con `lib/blogSocialMetadata.js`.

## Convenciones

Los componentes son Server Components salvo que necesiten estado, eventos o APIs del navegador. Un archivo con `"use client"` debe ser el boundary más pequeño posible. Los componentes globales pertenecen a `components/layout`; una sección exclusiva del Home, a `components/home`; lógica pura o compartida, a `lib`.

Para agregar una sección:

1. Crear un componente nombrado en `components/home` y sus datos junto a él.
2. Mantenerlo server-side si no necesita interacción.
3. Añadirlo al orden explícito de `app/page.jsx`.
4. Conservar estilos en el punto correcto de la cascada y validar ambos temas y responsive.

## Contenido bilingüe y scripts globales

Actualmente `public/site.js` contiene el diccionario español/inglés, reemplaza nodos `data-i18n` y coordina idioma, tema, navegación móvil y reveals. `public/wa-chat.js` anima las demostraciones mediante IDs/clases estables. Para modificar copy bilingüe, actualizar ambas ramas de `DICT`, conservar la clave y el fallback JSX, y probar el selector de idioma. Véase [estado de contenido e i18n](docs/content-and-i18n-current-state.md).

## Blog, metadata y límites actuales

El Blog consume un API configurable, renderiza un subconjunto editorial seguro de Markdown y usa imagen de portada o fallback para Open Graph/Twitter. Véase [flujo del Blog](docs/blog-data-flow.md) y [arquitectura](docs/architecture.md).

Limitaciones: i18n y varias interacciones aún dependen de manipulación imperativa del DOM; CSS sigue siendo global; no hay suite automatizada de lint o tests; el formulario Demo solo ofrece feedback local y algunos enlaces de footer son placeholders.
