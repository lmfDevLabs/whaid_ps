# Flujo de datos del Blog

## Rutas y carga

`/blog` (`app/blog/page.jsx`) fuerza render dinámico, llama `fetchPublishedPosts()` y elige el primer post con slug como destacado. Cada tarjeta enlaza por slug y usa el id solo como fallback. `/blog/[slug]` llama `fetchPublishedPostBySlug(slug)`; si no existe, ejecuta `notFound()`.

`lib/blogApi.js` resuelve la base desde `NEXT_PUBLIC_BLOG_API_BASE_URL`, `BLOG_API_BASE_URL` o el endpoint público por defecto. Solicita sin caché, tolera JSON inválido/respuestas no exitosas y conserva el esquema `{posts}`/`{post}` del API.

## Imágenes y metadata

`normalizeBlogImageUrl` convierte rutas `gs://bucket/object` a URLs públicas de Firebase; `ImageWithFallback` conserva la maqueta ante ausencia/error. `generateMetadata` limpia título/excerpt, construye canonical, fecha de publicación y Open Graph/Twitter. `getPostSocialImage` valida HTTP(S) y usa `/social/whaid-og-default.png` cuando la portada no es válida.

## Render editorial

`PostTemplate` compone autor, portada, cuerpo, keyshot, media y acciones sociales. `MarkdownContent` implementa deliberadamente un subconjunto sin HTML crudo: encabezados, párrafos, énfasis, enlaces seguros, listas, citas y separadores.

## Deuda posterior

Separar cards/formatters del listado, centralizar modelos normalizados del post, añadir estados de error observables, cubrir el parser con pruebas, decidir render embebido de video y mover copy editorial del Blog al catálogo bilingüe React.
