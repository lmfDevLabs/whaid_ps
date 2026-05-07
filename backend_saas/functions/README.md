# Whaid Blog API

Mini API REST pública para leer publicaciones de blog desde Firestore usando Express sobre Firebase Cloud Functions v2.

## Rutas

La función HTTP exportada se llama `api`. En producción, Cloud Functions usa el nombre de la función como prefijo de URL y Express recibe la ruta sin ese prefijo. Por eso, las rutas públicas finales son:

- `GET /api/health`: verifica que el servicio esté activo.
- `GET /api/blog/posts`: lista posts publicados, ordenados por `published_at` descendente. No incluye el campo `content`.
- `GET /api/blog/posts/:slug`: devuelve el detalle de un post publicado por `slug`, incluyendo `content`.

Internamente, Express también acepta los aliases `/api/health`, `/api/blog/posts` y `/api/blog/posts/:slug` para facilitar pruebas locales cuando el emulador conserva el nombre de la función en el path.

## Estructura de documentos

Los documentos deben crearse manualmente por ahora en la colección `blog_posts` con esta estructura base:

```json
{
  "title": "Mi primer post",
  "slug": "mi-primer-post",
  "excerpt": "Resumen corto para cards/listado.",
  "content": "Contenido completo del post.",
  "cover_image_url": null,
  "author": "Whaid",
  "tags": ["ai", "productividad"],
  "status": "published",
  "published_at": "Firestore Timestamp o null",
  "created_at": "Firestore Timestamp",
  "updated_at": "Firestore Timestamp"
}
```

Solo los documentos con `status` igual a `published` se devuelven desde la API.

## Probar localmente

Desde la carpeta `backend_saas`, ejecuta:

```bash
firebase emulators:start --only functions,firestore
```

También puedes ejecutar desde `backend_saas/functions`:

```bash
npm run serve
```

## URLs de ejemplo

Producción:

```bash
curl -i https://us-central1-whaid-public-site-dd23f.cloudfunctions.net/api/health
curl -i https://us-central1-whaid-public-site-dd23f.cloudfunctions.net/api/blog/posts
curl -i https://us-central1-whaid-public-site-dd23f.cloudfunctions.net/api/blog/posts/mi-primer-post
```

Emulador local:

```bash
curl -i http://127.0.0.1:5001/<PROJECT_ID>/us-central1/api/health
curl -i http://127.0.0.1:5001/<PROJECT_ID>/us-central1/api/blog/posts
curl -i http://127.0.0.1:5001/<PROJECT_ID>/us-central1/api/blog/posts/mi-primer-post
```

Si tu versión del emulador conserva el nombre de la función en el path de Express, también están disponibles estos aliases:

- `/api/health`
- `/api/blog/posts`
- `/api/blog/posts/mi-primer-post`
