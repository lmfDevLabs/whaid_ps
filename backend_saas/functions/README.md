# Whaid Blog API

Mini API REST pública para leer publicaciones de blog desde Firestore usando Express sobre Firebase Cloud Functions v2.

## Rutas

La función HTTP exportada se llama `api`. En producción, Cloud Functions usa el nombre de la función como prefijo de URL y Express recibe la ruta sin ese prefijo. Por eso, las rutas públicas finales son:

- `GET /api/health`: verifica que el servicio esté activo.
- `GET /api/blog/posts`: lista posts publicados, ordenados por `published_at` descendente. No incluye el campo `content`.
- `GET /api/blog/posts/:slug`: devuelve el detalle de un post publicado por `slug`, incluyendo `content`.
- `POST /api/demo`: valida y procesa una solicitud del formulario de demo.

## Formulario de demo: configuración

El endpoint se ejecuta en Firebase Functions porque esta aplicación ya despliega su API allí y Firestore ofrece un contador transaccional compartido entre instancias. El frontend no contiene claves de Resend ni secretos de Turnstile.

1. En Cloudflare Turnstile, crea un widget **Managed**, registra cada dominio de producción permitido y copia la site key pública y la secret key. Configura también `TURNSTILE_ALLOWED_HOSTNAMES` para que Siteverify rechace tokens emitidos para otros hosts.
2. En Resend, añade y verifica mediante DNS un dominio o subdominio de Whaid. Usa una dirección de ese dominio en `DEMO_FORM_FROM_EMAIL`; la dirección del visitante se configura automáticamente como `reply_to`.
3. Configura `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y `NEXT_PUBLIC_DEMO_FORM_API_URL` en el despliegue de Next.js. Define `DEMO_FORM_FROM_EMAIL`, `TURNSTILE_ALLOWED_HOSTNAMES`, `DEMO_ALLOWED_ORIGINS`, `DEMO_RATE_LIMIT_MAX` y `DEMO_RATE_LIMIT_WINDOW_MINUTES` en el entorno de Functions.
4. Guarda los secretos con Firebase CLI, sin escribirlos en archivos versionados:

```bash
firebase functions:secrets:set RESEND_API_KEY
firebase functions:secrets:set DEMO_FORM_TO_EMAIL
firebase functions:secrets:set TURNSTILE_SECRET_KEY
firebase functions:secrets:set DEMO_RATE_LIMIT_SECRET
```

`DEMO_FORM_TO_EMAIL` debe contener el Gmail receptor. No se necesita contraseña de Gmail, credencial SMTP ni contraseña de aplicación.

### Pruebas seguras

En desarrollo utiliza las [claves de prueba oficiales de Turnstile](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) y un destinatario de prueba controlado. Ejecuta `npm test`, levanta los emuladores y envía un `POST` contra `/api/demo`; nunca pegues secretos en comandos que queden en el historial. Para la prueba final, configura los secretos mediante Firebase CLI, despliega, completa el formulario desde un dominio permitido y confirma el mensaje en Gmail y el `replyTo`. Revisa solo el estado y los metadatos del log: el backend no registra el contenido enviado.

### Acciones externas pendientes

- Crear el widget Turnstile y autorizar producción, preview y localhost según corresponda.
- Verificar por DNS el dominio remitente en Resend.
- Establecer el Gmail receptor en el secreto `DEMO_FORM_TO_EMAIL`.
- Generar un valor aleatorio de al menos 32 bytes para `DEMO_RATE_LIMIT_SECRET`.
- Desplegar índices de Firestore para activar TTL sobre `demo_form_rate_limits.expiresAt` y desplegar Functions.
- Realizar un envío real final y confirmar recepción y respuesta al visitante sin revelar secretos.

Los valores y comentarios de referencia están en `../../.env.example`; nunca se deben copiar valores reales al repositorio.

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
