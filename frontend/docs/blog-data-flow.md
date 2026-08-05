# Flujo de datos del Blog

## Obtención de artículos

`lib/blogApi.js` define la URL base del API del Blog. Usa `NEXT_PUBLIC_BLOG_API_BASE_URL`, `BLOG_API_BASE_URL` o el endpoint público por defecto, y consulta:

- `GET /blog/posts` para el listado.
- `GET /blog/posts/:slug` para el detalle.

Las respuestas no se cachean (`cache: "no-store"`) para reflejar publicaciones vigentes.

## Normalización y fallbacks

Antes de entregar posts a la UI, `blogApi.js` normaliza `cover_image_url` y `avatar_author` con `normalizeBlogImageUrl`. Si el API falla, el listado devuelve `[]` y el detalle devuelve `null`, lo que permite `notFound()` en `/blog/[slug]`.

## Listado `/blog`

`app/blog/page.jsx` obtiene posts publicados, selecciona un destacado con slug cuando existe y renderiza tarjetas con fallback de ruta por `slug` o `id`. Las fechas se formatean en español con `Intl.DateTimeFormat`.

## Detalle `/blog/[slug]`

`app/blog/[slug]/page.jsx` obtiene el post por slug, genera metadatos por artículo y renderiza `PostTemplate`. Si no hay post, responde con la página 404 de Next.

## Markdown, autor y medios

`components/blog/MarkdownContent.jsx` renderiza el contenido Markdown. `PostAuthor.jsx` y `PostTags.jsx` muestran autor y etiquetas. `PostMediaBlock.jsx` maneja imagen, YouTube y MP4, preservando fallbacks y normalización de medios.

## Metadatos, Open Graph y compartir

`generateMetadata` construye título, descripción, canonical, Open Graph y Twitter Card. `lib/blogSocialMetadata.js` decide la imagen social del post o fallback. `PostTemplate` mantiene enlaces de compartir para el artículo actual.
