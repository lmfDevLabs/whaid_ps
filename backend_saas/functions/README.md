# Whaid Blog API

Mini API REST pública para leer publicaciones de blog desde Firestore usando Express sobre Firebase Cloud Functions v2.

## Rutas

La función HTTP exportada se llama `api` y monta estas rutas:

- `GET /api/health`: verifica que el servicio esté activo.
- `GET /api/blog/posts`: lista posts publicados, ordenados por `published_at` descendente. No incluye el campo `content`.
- `GET /api/blog/posts/:slug`: devuelve el detalle de un post publicado por `slug`, incluyendo `content`.

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

En el emulador, usa el host/puerto que muestre Firebase CLI para la función `api`. Las rutas disponibles son:

- `/api/health`
- `/api/blog/posts`
- `/api/blog/posts/mi-primer-post`
