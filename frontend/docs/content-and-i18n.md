# Contenido bilingüe e i18n

## Arquitectura

Los diccionarios importables están en `i18n/dictionaries/es.js` y `i18n/dictionaries/en.js`. Ambos conservan las claves históricas de `site.js`; `qa_strip` contiene el bloque estructurado de preguntas y respuestas. `i18n/index.js` valida el idioma, selecciona el diccionario y devuelve una marca visible (además de un error de consola en desarrollo) cuando falta una clave.

`LanguageProvider` envuelve toda la aplicación desde `app/layout.jsx` y publica `{ language, setLanguage, dictionary, t }`. El render inicial usa español, igual que el sitio anterior. Tras montar en el cliente lee `whaid:lang` de `localStorage`; todo acceso a `window`, `document` y almacenamiento ocurre en efectos o eventos de cliente. Al cambiar, persiste la preferencia y actualiza `lang` y `data-lang` en `<html>`.

## Uso

Agrega cada clave con exactamente el mismo nombre en ambos diccionarios:

```js
// dictionaries/es.js
pricing_title: "Precio flexible según demanda"
// dictionaries/en.js
pricing_title: "Flexible pricing based on demand"
```

En un componente interactivo usa el hook:

```jsx
"use client";
import useLanguage from "../i18n/useLanguage";
const {language, setLanguage, dictionary, t} = useLanguage();
return <h2>{t("pricing_title")}</h2>;
```

Para mantener componentes de servidor pequeños, el proyecto ofrece `TranslatedText`:

```jsx
<h2><TranslatedText i18nKey="pricing_title" /></h2>
```

El diccionario completo se usa para contenido estructurado, como `dictionary.qa_strip` en `QaStrip`. No se deben introducir textos mediante `innerHTML`, `textContent`, selectores `data-i18n` ni mutaciones del DOM.

## Selector y compatibilidad

`SiteNav` contiene el único selector ES/EN compartido por Home, Blog y artículos. Consume el proveedor, muestra el idioma alternativo y persiste cada cambio.

`public/site.js` permanece únicamente por responsabilidades heredadas no lingüísticas: tema y persistencia del tema, menú móvil, estado visual de navegación al hacer scroll, animaciones reveal y arranque del chat de WhatsApp. Ya no contiene diccionarios, selectores `data-i18n`, mutaciones de texto ni funciones globales de idioma.

## Validación

Después de cada cambio:

1. Compara las claves exportadas por `es.js` y `en.js`; no debe faltar ninguna.
2. Busca `data-i18n`, `data-i18n-placeholder` y `data-i18n-title` fuera de los sketches históricos.
3. Ejecuta `npm run build` desde `frontend/`.
4. Prueba el selector y una recarga en Home, `/blog` y un artículo; verifica también placeholders, títulos y nombres accesibles.
