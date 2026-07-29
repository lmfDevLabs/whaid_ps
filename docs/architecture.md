# Arquitectura del frontend

## Diagrama textual

```text
Browser
  -> Next App Router (app/layout.jsx)
     -> /                         app/page.jsx
        -> layout/*               chrome compartido
        -> home/*                 secciones y pequeños client boundaries
     -> /blog                     app/blog/page.jsx -> lib/blogApi.js -> API
     -> /blog/[slug]              page.jsx -> blog/PostTemplate -> API
  -> public/site.js               i18n, tema, nav, reveals
  -> public/wa-chat.js            demos de conversación
  -> styles/*.css                 cascada global
```

## Responsabilidades y dependencias

`app` define rutas, metadata, obtención de datos y composición. `components/layout` contiene UI global; `components/home` secciones exclusivas y sus datos; `components/blog` presentación editorial. `lib` contiene acceso a infraestructura y funciones puras. `public` aloja assets y scripts no empaquetados. `styles` mantiene la cascada global y divisiones por dominio.

Flujo permitido: `app -> components -> lib`; una sección puede importar sus datos/utilidades o `layout`, pero `lib` no importa componentes y los dominios Home/Blog no se importan entre sí. Los componentes interactivos son Client Components mínimos dentro de una sección server-side.

## Ubicación de archivos nuevos

- Ruta, metadata o carga inicial: `app`.
- Chrome reutilizado entre rutas: `components/layout`.
- Presentación propia de una página: carpeta de dominio en `components`.
- Estado/eventos/browser API: componente cliente junto a su padre.
- Datos estáticos exclusivos: `*.data.js` junto a la sección.
- Transformación pura compartible: `lib`.

`app/page.jsx` no debe contener datasets, SVG complejos, efectos ni implementación interna. Solo puede declarar el orden de secciones y props de navegación/layout. Si una sección supera una responsabilidad, se divide en presentación, datos y boundary cliente; nunca se vuelve a trasladar al archivo de ruta.

## CSS

`styles/home.css` sigue siendo el punto de entrada para preservar compatibilidad. En esta etapa solo se extrajeron bloques contiguos de Other Possibilities, Pricing y Security, mediante un punto de entrada que reproduce exactamente el orden original para conservar la cascada. Hero/chat, QA, Pitch, Keyshots, Use Cases, formulario, Information Types y Take a Look se separarán después de contar con comparación visual automatizada.
